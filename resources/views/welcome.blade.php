<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BackCAPS</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-100 flex items-center justify-center p-8">
    <div class="text-center space-y-6">
        <h1 class="text-3xl font-black uppercase tracking-[0.2em] text-slate-900">BackCAPS</h1>

        <button
            onclick="window.location.href='{{ url('/zohaib') }}'"
            class="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 group flex items-center gap-3"
        >
            <span>View Full Profile</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </button>
    </div>
</body>
</html>
