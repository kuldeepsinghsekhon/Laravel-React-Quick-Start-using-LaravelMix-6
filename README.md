<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">

</p>

## Stater React.js App With Laravel-10 As Backend API  Using Laravel Mix 6 
Its a Demo App developed to show use of React With Laravel. Here Laravel Act as Backend API.
We may do it with many frontend build tool like vite, Laravel mix,Webpack etc. we may also use Laravel Breeze package to quick start laravel and react.
In this example i have used Laravel Mix 6 as Build Tool. 

## How to use this
In order to use this example you need to follow three simple steps.
1. Clone repository using git clone command

2. Now need to install  node packages using these commands.
npm install 

3. Now install PHP packages with command
composer install 

4. Create a database in your mysql server using phpmyadmin or other tool and add Details in env file.

5. run command to execute react dev environment 
npm run dev

6.Final Step start the development server by executing php artisan serve and visit http://localhost:8000 using your favorite browser.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:
Laravel is accessible, powerful, and provides tools required for large, robust applications.

## What is Mix?

Webpack is an incredibly powerful module bundler that prepares your JavaScript and assets for the browser. The only understandable downside is that it requires a bit of a learning curve.

In an effort to flatten that curve, Mix is a thin layer on top of webpack for the rest of us. It exposes a simple, fluent API for dynamically constructing your webpack configuration.

Mix targets the 80% usecase. If, for example, you only care about compiling modern JavaScript and triggering a CSS preprocessor, Mix should be right up your alley. Don't worry about researching the necessary webpack loaders and plugins. Instead, install Mix...

npm install laravel-mix --save-dev

...and define your build within a webpack.mix.js file in your project root.

mix.js('src/app.js', 'dist')
   .sass('src/styles.scss', 'dist');

That's it! Mix will read this file and construct the necessary webpack configuration for the build.

The only remaining step is to compile your code and get to work.

npx mix

