<?php

namespace App\Dtos\Auth;

use Illuminate\Http\Request;

readonly class RegisterDto
{
    public function __construct(
        public string $email,
        public string $password,
        public string $confirmed_password,
        public string $full_name
    ) {}

    public static function fromRequest(Request $request): self
    {
        return new self(
            email: $request->validated('email'),
            password: $request->validated('password'),
            confirmed_password: $request->validated('confirmed_password'),
            full_name: $request->validated('full_name'),
        );
    }
}
