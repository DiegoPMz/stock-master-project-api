<?php

namespace App\Http\Controllers\Category;

use App\Contracts\Category\DestroyCategoryContract;
use App\Dtos\Category\DestroyCategoryDto;
use App\Models\Category;

class CategoryDestroyController
{
    public function __construct(
        private readonly DestroyCategoryContract $destroyCategoryService
    ) {}

    public function __invoke(Category $category)
    {
        $result = $this->destroyCategoryService->execute(new DestroyCategoryDto($category));

        return redirect()
            ->back()
            ->with('success', 'Categoría eliminada con éxito.');
    }
}
