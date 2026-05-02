<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Check if admin already exists to avoid duplicates
        if (!User::where('email', 'admin@backcaps.agency')->exists()) {
            User::create([
                'name' => 'BackCaps Admin',
                'email' => 'admin@backcaps.agency',
                'password' => Hash::make('admin1234'), // Consider changing this after first login
                'email_verified_at' => now(),
            ]);
        }
    }
}
