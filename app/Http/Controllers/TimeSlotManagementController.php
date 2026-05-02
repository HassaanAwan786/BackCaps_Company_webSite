<?php

namespace App\Http\Controllers;

use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimeSlotManagementController extends Controller
{
    public function index()
    {
        $slots = TimeSlot::orderBy('time')->get();
        return Inertia::render('Admin/TimeSlots/Index', [
            'timeSlots' => $slots
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'time' => 'required|string'
        ]);

        TimeSlot::create([
            'time' => $request->time,
            'is_available' => true
        ]);

        return back()->with('success', 'Time slot added successfully');
    }

    public function toggleAvailability($id)
    {
        $slot = TimeSlot::findOrFail($id);
        $slot->update(['is_available' => !$slot->is_available]);

        return back()->with('success', 'Status updated successfully');
    }

    public function destroy($id)
    {
        $slot = TimeSlot::findOrFail($id);
        $slot->delete();

        return back()->with('success', 'Time slot deleted successfully');
    }
}
