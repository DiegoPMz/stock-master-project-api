<?php

namespace App\Providers;

use App\Contracts\Auth\LoginContract;
use App\Contracts\Auth\RegisterContract;
use App\Services\Auth\EloquentLoginService;
use App\Services\Auth\EloquentRegisterService;
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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
