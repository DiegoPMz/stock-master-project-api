<?php

namespace App\Http\Controllers\Auth;

use App\Contracts\Auth\LoginContract;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function __construct(
        private readonly LoginContract $loginService
    ) {}

    public function show()
    {
        return Inertia::render('features/auth/login-page');
    }

    public function store(LoginRequest $request)
    {
        $result = $this->loginService->execute($request->toDto());

        if ($result->success()) {
            Auth::login($result->success(), $request->boolean('remember'));

            $request->session()->regenerate();

            return redirect()->intended(Route('dashboard'));
        }

        return back()->withErrors(['email' => $result->error()]);
    }
}
