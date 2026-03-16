<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Category\CategoryDestroyController;
use App\Http\Controllers\Category\CategoryShowController;
use App\Http\Controllers\Category\CategoryStoreController;
use App\Http\Controllers\Category\CategoryUpdateController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class,  'show'])->name('login.index');
Route::post('/login', [LoginController::class,  'store'])->name('login.store');

Route::get('/register', [RegisterController::class, 'show'])->name('register.index');
Route::post('/register', [RegisterController::class,  'store'])->name('register.store');

Route::get('/categorias', CategoryShowController::class)->name('categories.index');
Route::post('/categorias', CategoryStoreController::class)->name('categories.store');
Route::put('/categorias/{category}', CategoryUpdateController::class)->name('categories.update');
Route::delete('/categorias/{category}', CategoryDestroyController::class)->name('categories.destroy');
