<?php

namespace App\Services\Category;

use App\Contracts\Category\CategoryListContract;
use App\Dtos\Common\PaginationDto;
use App\Models\Category;
use GrahamCampbell\ResultType\Result;
use GrahamCampbell\ResultType\Success;

final readonly class CategoryListService implements CategoryListContract
{
    public function getPaginated(PaginationDto $dto): Result
    {
        $limit = $dto->limit ?? 10;

        $paginator = Category::orderBy('id')
            ->paginate($limit)
            ->withQueryString()
            ->onEachSide(3);

        return Success::create($paginator);
    }
}
