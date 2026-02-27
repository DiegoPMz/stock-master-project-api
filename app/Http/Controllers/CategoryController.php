<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show()
    {
        return Inertia::render('features/category/category-management');
    }

    public function store(Request $request)
    {
        $userId = $request->user()->id;

        $validated = $request->validate([
            Category::NAME => ['required', 'min:1', 'max:200'],
            Category::COLOR_HEX => ['required', 'min:1', 'regex:^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$'],
        ]);

        $newCategory = Category::create([
            Category::NAME => $validated[Category::NAME],
            Category::COLOR_HEX => $validated[Category::COLOR_HEX],
            Category::USER_ID => $userId,
        ]);

        return response()->noContent();
    }

    public function get(Category $category)
    {
        return Inertia::render('features/category/category-managemente', $category);
    }

    public function remove(Category $category)
    {
        $category->delete();

        return response()->noContent();
    }

    public function getAll()
    {
        $categories = Category::orderBy('updated_at')->all();

        return Inertia::render('features/category/category-managemente', $categories);
    }
}
