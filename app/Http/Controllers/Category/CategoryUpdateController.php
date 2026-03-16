<?php

namespace App\Http\Controllers\Category;

use App\Contracts\Category\UpdateCategoryContract;
use App\Dtos\Category\UpdateCategoryDto;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Models\Category;

class CategoryUpdateController
{
    public function __construct(
        private readonly UpdateCategoryContract $updateCategoryService
    ) {}

    public function __invoke(UpdateCategoryRequest $request, Category $category)
    {
        $result = $this->updateCategoryService->execute(
            UpdateCategoryDto::fromRequest($request->validated(), $category)
        );
        $successValue = $result->success();

        if ($successValue->isEmpty()) {
            $error = $result->error()->get();

            return back()->withErrors(['serverError' => $error]);
        }

        return back()->with('message', 'Categoria Actualiza exitosamente.');
    }
}
