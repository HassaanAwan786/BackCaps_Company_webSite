<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\LeadInquiryMail;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'budget' => 'nullable|string|max:255',
            'service' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'meeting_date' => 'nullable|string|max:255',
            'meeting_time' => 'nullable|string|max:255',
            'message' => 'nullable|string',
        ]);

        $lead = Lead::create($validated);

        // Send Email to Admin
        try {
            Mail::to(config('mail.admin_address'))->send(new LeadInquiryMail($lead));
        } catch (\Exception $e) {
            // Log error but continue
            \Log::error("Mail failed: " . $e->getMessage());
        }

        return back()->with('success', 'Your inquiry has been sent successfully! We will contact you soon.');
    }
}
