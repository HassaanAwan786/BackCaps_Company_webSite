<x-mail::message>
# New Inquiry Received

You have received a new project inquiry from the BackCaps website.

**Client Details:**
- **Name:** {{ $lead->name }}
- **Email:** {{ $lead->email }}
- **Phone:** {{ $lead->phone ?? 'Not provided' }}
- **Service Interested:** {{ $lead->service ?? 'General' }}

**Message:**
{{ $lead->message ?? 'No message provided.' }}

<x-mail::button :url="config('app.url') . '/admin/dashboard'">
View in Dashboard
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
