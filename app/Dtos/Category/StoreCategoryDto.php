<?php

namespace App\Dtos\Category;

final readonly class StoreCategoryDto
{
    public function __construct(
        public string $name,
        public string $user_id
    ) {}

    public static function fromRequest(array $validated, string $userId): self
    {
        return new self(
            name: $validated['name'],
            user_id: $userId
        );
    }
}
