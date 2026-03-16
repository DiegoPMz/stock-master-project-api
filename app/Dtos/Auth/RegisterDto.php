<?php

namespace App\Dtos\Auth;

final readonly class RegisterDto
{
    public function __construct(
        public string $email,
        public string $password,
        public string $confirmed_password,
        public string $full_name
    ) {}

    public static function fromRequest(array $validated): self
    {
        return new self(
            email: $validated['email'],
            password: $validated['password'],
            confirmed_password: $validated['confirmed_password'],
            full_name: $validated['full_name']
        );
    }
}
