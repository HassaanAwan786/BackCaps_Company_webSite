<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TimeSlot;

class TimeSlotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $slots = [
            '09:00 AM',
            '10:30 AM',
            '01:00 PM',
            '02:30 PM',
            '04:00 PM',
            '05:30 PM',
        ];

        foreach ($slots as $slot) {
            TimeSlot::create(['time' => $slot]);
        }
    }
}
