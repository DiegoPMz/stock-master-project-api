<?php

namespace App\Http\Controllers\Category;

use App\Contracts\Category\CategoryListContract;
use App\Http\Requests\Common\PaginationRequest;
use Inertia\Inertia;

class CategoryShowController
{
    public function __construct(
        private readonly CategoryListContract $CategoryListService
    ) {}

    public function __invoke(PaginationRequest $request)
    {

        $result = $this->CategoryListService->getPaginated($request->toDto());
        $paginatorValue = $result->success();

        if ($paginatorValue->isDefined()) {
            return Inertia::render('features/category/category-management.page', [
                'categoryPagination' => $paginatorValue->get(),
            ]);
        }

        return Inertia::render(
            'features/category/category-management.page',
            ['categoryPaginationError' => 'Las categorías no pudieron ser cargadas. Intente nuevamente más tarde.']
        );
    }
}
