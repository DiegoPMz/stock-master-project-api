<?php

namespace App\Contracts\Category;

use App\Dtos\Category\DestroyCategoryDto;
use GrahamCampbell\ResultType\Result;

interface DestroyCategoryContract
{
    /**
     * @return Result<string, string>
     */
    public function execute(DestroyCategoryDto $dto): Result;
}
