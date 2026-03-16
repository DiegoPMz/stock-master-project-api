<?php

namespace App\Services\Category;

use App\Contracts\Category\StoreCategoryContract;
use App\Dtos\Category\StoreCategoryDto;
use App\Models\Category;
use GrahamCampbell\ResultType\Result;
use GrahamCampbell\ResultType\Success;

final readonly class StoreCategoryService implements StoreCategoryContract
{
    public function execute(StoreCategoryDto $dto): Result
    {
        $category = Category::create([
            'user_id' => $dto->user_id,
            'name' => $dto->name,
        ]);

        return Success::create($category);
    }
}
