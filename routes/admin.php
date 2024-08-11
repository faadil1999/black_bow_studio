<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here lies all routes available to admins.
|
*/

Route::midleware([])->group(function (){
    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');


});
