<?php

namespace App\Services\Auth;

use App\Contracts\Auth\RegisterContract;
use App\Dtos\Auth\RegisterDto;
use App\Models\User;
use GrahamCampbell\ResultType\Result;
use GrahamCampbell\ResultType\Success;

final readonly class EloquentRegisterService implements RegisterContract
{
    public function execute(RegisterDto $data): Result
    {
        $user = new User;
        $user->email = $data->email;
        $user->password = $data->password;
        $user->name = $data->full_name;
        $user->save();

        return Success::create($user);
    }
}
