<?php

namespace App\Mail;

use App\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LeadInquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    public $lead;

    public function __construct(Lead $lead)
    {
        $this->lead = $lead;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Inquiry from ' . $this->lead->name,
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.leads.inquiry',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
