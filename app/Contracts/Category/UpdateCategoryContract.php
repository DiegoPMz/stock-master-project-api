<?php

namespace App\Contracts\Category;

use App\Dtos\Category\UpdateCategoryDto;
use GrahamCampbell\ResultType\Result;

interface UpdateCategoryContract
{
    /**
     * @return Result<string, string>
     */
    public function execute(UpdateCategoryDto $dto): Result;
}
