<?php

namespace App\Contracts\Category;

use App\Dtos\Common\PaginationDto;
use App\Models\Category;
use GrahamCampbell\ResultType\Result;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * @return Result<LengthAwarePaginator<Category>, string>
 */
interface CategoryListContract
{
    public function getPaginated(PaginationDto $dto): Result;
}
