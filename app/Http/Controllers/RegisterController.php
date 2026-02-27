<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public const SHOW = 'show';

    public const STORE = 'store';

    public function show()
    {
        return Inertia::render('features/auth/register-page');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['email', 'unique:users'],
            'password' => ['required', Password::defaults()],
            'confirmed_password' => ['required', 'same:password'],
            'full_name' => ['required', 'min:1'],
        ]);

        $user = new User;
        $user->email = $credentials['email'];
        $user->password = $credentials['password'];
        $user->name = $credentials['full_name'];
        $user->save();

        Auth::login($user);

        return redirect('/');
    }
}
