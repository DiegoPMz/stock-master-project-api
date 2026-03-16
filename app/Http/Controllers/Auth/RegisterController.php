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
        $successValue = $result->success();

        if ($successValue->isDefined()) {
            Auth::login($successValue->get());

            return redirect()->intended(route('categories.index'));
        }

        $error = $result->error()->get();

        return back()->withErrors([
            'error' => $error->message ?: 'Login failed: '.$error->code,
        ]);
    }
}
