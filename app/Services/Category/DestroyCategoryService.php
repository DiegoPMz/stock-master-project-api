<?php

namespace App\Services\Category;

use App\Contracts\Category\DestroyCategoryContract;
use App\Dtos\Category\DestroyCategoryDto;
use GrahamCampbell\ResultType\Result;
use GrahamCampbell\ResultType\Success;

final readonly class DestroyCategoryService implements DestroyCategoryContract
{
    public function execute(DestroyCategoryDto $dto): Result
    {
        $dto->category->delete();

        return Success::create('Categoría eliminada con éxito.');
    }
}
