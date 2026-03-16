<?php

namespace App\Dtos\Category;

use App\Models\Category;

final readonly class DestroyCategoryDto
{
    public function __construct(
        public Category $category
    ) {}
}
