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
        $successValue = $result->success();

        if ($successValue->isDefined()) {
            Auth::login($successValue->get(), $request->boolean('remember'));
            $request->session()->regenerate();

            return redirect()->intended(route('categories.index'));
        }

        $error = $result->error()->get();

        return back()->withErrors([
            'email' => $error->message ?: 'Login failed: '.$error->code,
        ]);
    }
}
