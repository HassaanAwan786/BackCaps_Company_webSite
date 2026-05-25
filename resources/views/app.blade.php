<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @if(request()->is('team/ibnay-hussain'))
            <title inertia>Syed Ibnay Hussain | Full Stack Lead</title>
            <meta name="description" content="Architecting seamless, high-performance web applications. I turn complex technical requirements into elegant digital realities.">

            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="profile">
            <meta property="og:url" content="{{ url()->current() }}">
            <meta property="og:title" content="Syed Ibnay Hussain | Full Stack Lead">
            <meta property="og:description" content="Architecting seamless, high-performance web applications. I turn complex technical requirements into elegant digital realities.">
            <meta property="og:image" content="{{ asset('assets/images/team/portfolio/ibnay_img.jpeg') }}">

            <!-- Twitter -->
            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:url" content="{{ url()->current() }}">
            <meta property="twitter:title" content="Syed Ibnay Hussain | Full Stack Lead">
            <meta property="twitter:description" content="Architecting seamless, high-performance web applications. I turn complex technical requirements into elegant digital realities.">
            <meta property="twitter:image" content="{{ asset('assets/images/team/portfolio/ibnay_img.jpeg') }}">

            <!-- Favicon -->
            <link rel="icon" type="image/jpeg" href="{{ asset('assets/images/team/portfolio/ibnay_img.jpeg') }}">
            <link rel="apple-touch-icon" href="{{ asset('assets/images/team/portfolio/ibnay_img.jpeg') }}">
        @else
            <title inertia>{{ config('app.name', 'BackCaps') }}</title>
            <meta name="description" content="A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production-scale deployment.">

            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website">
            <meta property="og:url" content="{{ url()->current() }}">
            <meta property="og:title" content="BackCaps | Premium Product Engineering Agency">
            <meta property="og:description" content="A tight-knit team of engineers and designers who obsess over product quality. We build applications that ship.">
            <meta property="og:image" content="{{ asset('assets/images/who_1.png') }}">

            <!-- Twitter -->
            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:url" content="{{ url()->current() }}">
            <meta property="twitter:title" content="BackCaps | Premium Product Engineering Agency">
            <meta property="twitter:description" content="A tight-knit team of engineers and designers who obsess over product quality. We build applications that ship.">
            <meta property="twitter:image" content="{{ asset('assets/images/who_1.png') }}">

            <!-- Favicon -->
            <link rel="icon" type="image/jpeg" href="{{ asset('assets/Website icons/Backcaps.jpeg') }}">
            <link rel="apple-touch-icon" href="{{ asset('assets/Website icons/Backcaps.jpeg') }}">
        @endif

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-brand-dark text-white">
        @inertia
    </body>
</html>
