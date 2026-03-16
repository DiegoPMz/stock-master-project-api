<?php

namespace App\Http\Controllers\Category;

use App\Contracts\Category\StoreCategoryContract;
use App\Http\Requests\Category\StoreCategoryRequest;

class CategoryStoreController
{
    public function __construct(
        private readonly StoreCategoryContract $storeCategoryService
    ) {}

    public function __invoke(StoreCategoryRequest $request)
    {
        $result = $this->storeCategoryService->execute($request->toDto());
        $successValue = $result->success();

        if ($successValue->isDefined()) {
            return back()->with('message', 'Category created successfully');
        }

        $error = $result->error()->get();

        return back()->withErrors(['serverError' => $error]);

    }
}
