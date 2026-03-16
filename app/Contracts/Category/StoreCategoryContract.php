<?php

namespace App\Contracts\Category;

use App\Dtos\Category\StoreCategoryDto;
use App\Models\Category;
use GrahamCampbell\ResultType\Result;

interface StoreCategoryContract
{
    /**
     * @return Result<Category, string>
     */
    public function execute(StoreCategoryDto $dto): Result;
}
