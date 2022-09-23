<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/hello', [TestController::class, 'index']);









// Route::get('/', function () {
//     return redirect()->route('products.index');
// });

// Route::middleware(['auth', 'permission:product-list'])->group(function () {
//     Route::get('/products', [ProductController::class, 'index'])->name('products.index');
// });

// Route::middleware(['auth', 'permission:product-create'])->group(function () {
//     Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
//     Route::post('/products', [ProductController::class, 'store'])->name('products.store');
// });

// Route::middleware(['auth', 'permission:product-edit'])->group(function () {
//     Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
//     Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
// });

// Route::middleware(['auth', 'permission:product-delete'])->group(function () {
//     Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
// });

// Route::get('/login', [AuthController::class, 'login'])->name('login');
// Route::post('/login', [AuthController::class, 'postlogin'])->name('postlogin');
// Route::get('/logout', [AuthController::class, 'logout']);
