<?php

namespace App\Services\Category;

use App\Contracts\Category\UpdateCategoryContract;
use App\Dtos\Category\UpdateCategoryDto;
use GrahamCampbell\ResultType\Result;
use GrahamCampbell\ResultType\Success;

final readonly class UpdateCategoryService implements UpdateCategoryContract
{
    public function execute(UpdateCategoryDto $dto): Result
    {
        $category = $dto->category;

        if ($dto->name) {
            $category->name = $dto->name;
        }

        if ($dto->description) {
            $category->description = $dto->description;
        }

        $category->save();

        return Success::create('');
    }
}
