<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class,  LoginController::SHOW])->name('login');
Route::post('/login', [LoginController::class,  LoginController::STORE]);

Route::get('/register', [RegisterController::class,  RegisterController::SHOW])->name('register');
Route::post('/register', [RegisterController::class,  RegisterController::STORE]);
