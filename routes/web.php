<?php

use Illuminate\Support\Facades\Route;

// Root route
Route::get('/', function () {
    return view('welcome');
});

// Catch-all route for React Router
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*');
