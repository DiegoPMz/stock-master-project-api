<?php

namespace App\Services\Auth;

use App\Contracts\Auth\LoginContract;
use App\Dtos\Auth\LoginDto;
use App\Models\User;
use GrahamCampbell\ResultType\Error;
use GrahamCampbell\ResultType\Result;
use GrahamCampbell\ResultType\Success;
use Illuminate\Support\Facades\Hash;

class EloquentLoginService implements LoginContract
{
    public function execute(LoginDto $data): Result
    {
        $user = User::where('email', $data->email)->first();

        if (! $user || ! Hash::check($data->password, $user->password)) {
            return Error::create('The credentials doesnt match with our records.');
        }

        return Success::create($user);
    }
}
