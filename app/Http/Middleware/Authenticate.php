<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    protected function redirectTo(Request $request): ?string {
        return $request->expectsJson() ? null : route('login');
    }

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request,Closure $next, ...$guards): ?string
    {
        if ($token = $request->cookie('token')) {
            $request->headers->set('Authorization', 'Bearer ' . $token);
        }

        $this->authenticate($request, $guards);
        return $next($request);
      //  return $request->expectsJson() ? null : route('login');
    }
}
