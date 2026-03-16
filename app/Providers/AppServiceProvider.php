<?php

namespace App\Providers;

use App\Contracts\Auth\LoginContract;
use App\Contracts\Auth\RegisterContract;
use App\Contracts\Category\CategoryListContract;
use App\Contracts\Category\DestroyCategoryContract;
use App\Contracts\Category\StoreCategoryContract;
use App\Contracts\Category\UpdateCategoryContract;
use App\Services\Auth\EloquentLoginService;
use App\Services\Auth\EloquentRegisterService;
use App\Services\Category\CategoryListService;
use App\Services\Category\DestroyCategoryService;
use App\Services\Category\StoreCategoryService;
use App\Services\Category\UpdateCategoryService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            LoginContract::class,
            EloquentLoginService::class
        );

        $this->app->bind(
            RegisterContract::class,
            EloquentRegisterService::class
        );

        $this->app->bind(
            StoreCategoryContract::class,
            StoreCategoryService::class
        );

        $this->app->bind(
            CategoryListContract::class,
            CategoryListService::class
        );

        $this->app->bind(
            UpdateCategoryContract::class,
            UpdateCategoryService::class
        );

        $this->app->bind(
            DestroyCategoryContract::class,
            DestroyCategoryService::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
