<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InquiryManagementController extends Controller
{
    public function index()
    {
        $inquiries = Lead::latest()->get();
        return Inertia::render('Admin/Inquiries/Index', [
            'inquiries' => $inquiries
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,contacted,closed'
        ]);

        $lead = Lead::findOrFail($id);
        $lead->update(['status' => $request->status]);

        return back()->with('success', 'Status updated successfully');
    }

    public function destroy($id)
    {
        $lead = Lead::findOrFail($id);
        $lead->delete();

        return back()->with('success', 'Inquiry deleted successfully');
    }
}
