<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TimeSlotManagementController;
use App\Http\Controllers\InquiryManagementController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;

use App\Models\TimeSlot;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'timeSlots' => TimeSlot::where('is_available', true)->get(),
    ]);
});

Route::get('/team/ibnay-hussain', function () {
    return Inertia::render('Team/IbnayHussain');
})->name('team.ibnay-hussain');

Route::get('/team/muhammad-hassaan', function () {
    return Inertia::render('Team/MuhammadHassaan');
})->name('team.muhammad-hassaan');

Route::get('/team/zohaib-ahmed', function () {
    return Inertia::render('Team/ZohaibAhmed');
})->name('team.zohaib-ahmed');

/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
 
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
 
require __DIR__.'/auth.php';
*/

Route::get('admin/login', [AdminController::class, 'login'])->name('login');
Route::post('admin/login', [AdminController::class, 'authenticate']);
Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');

Route::post('/inquiry', [LeadController::class, 'store'])->name('inquiry.store');


Route::middleware('auth')->group(function () {
    Route::get('admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    
    // Inquiries Management
    Route::get('admin/inquiries', [InquiryManagementController::class, 'index'])->name('admin.inquiries.index');
    Route::patch('admin/inquiries/{id}/status', [InquiryManagementController::class, 'updateStatus'])->name('admin.inquiries.update-status');
    Route::delete('admin/inquiries/{id}', [InquiryManagementController::class, 'destroy'])->name('admin.inquiries.destroy');

    // Time Slots Management

    Route::get('admin/time-slots', [TimeSlotManagementController::class, 'index'])->name('admin.time-slots.index');
    Route::post('admin/time-slots', [TimeSlotManagementController::class, 'store'])->name('admin.time-slots.store');
    Route::patch('admin/time-slots/{id}/toggle', [TimeSlotManagementController::class, 'toggleAvailability'])->name('admin.time-slots.toggle');
    Route::delete('admin/time-slots/{id}', [TimeSlotManagementController::class, 'destroy'])->name('admin.time-slots.destroy');
});
