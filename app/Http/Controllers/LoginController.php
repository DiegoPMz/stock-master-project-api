<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public const SHOW = 'show';

    public const STORE = 'store';

    public function show()
    {
        return Inertia::render('features/auth/login-page');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['email'],
            'password' => ['required', 'min:1'],
        ]);

        $rememberSession = $request->boolean('remember');

        if (Auth::attempt($credentials, $rememberSession)) {
            $request->session()->regenerate();

            return redirect()->intended('/');
        }

        return back()->withErrors([
            'credentials' => 'Invalid credentials',
        ]);
    }
}
