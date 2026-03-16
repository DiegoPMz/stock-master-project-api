<?php

namespace App\Dtos\Category;

use App\Models\Category;

final readonly class UpdateCategoryDto
{
    public function __construct(
        public ?string $name,
        public ?string $description,
        public Category $category
    ) {}

    public static function fromRequest(array $validated, Category $category): self
    {
        return new self(
            name: $validated['name'] ?? null,
            description : $validated['description'] ?? null,
            category : $category
        );
    }
}
