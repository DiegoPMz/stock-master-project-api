<?php

namespace App\Http\Controllers\Auth;

use App\Contracts\Auth\RegisterContract;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function __construct(
        private readonly RegisterContract $registerService
    ) {}

    public function show()
    {
        return Inertia::render('features/auth/register-page');
    }

    public function store(RegisterRequest $request)
    {
        $result = $this->registerService->execute($request->toDto());

        if ($result->success()) {
            Auth::login($result->success());

            return redirect()->intended(route('dashboard'));
        }

        return back()->withErrors(['error' => $result->error()]);
    }
}
