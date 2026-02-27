<?php

namespace App\Dtos\Auth;

use Illuminate\Http\Request;

readonly class LoginDto
{
    public function __construct(
        public string $email,
        public string $password,
        public bool $remember = false
    ) {}

    public static function fromRequest(Request $request): self
    {
        return new self(
            email: $request->validated('email'),
            password: $request->validated('password'),
            remember: $request->boolean('remember')
        );
    }
}
