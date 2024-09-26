<?php

use App\Http\Controllers\ListingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/register', [UserController::class, 'register']);

Route::post('/login', [UserController::class, 'login']);

Route::post('/addListing', [ListingsController::class, 'addListing']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
