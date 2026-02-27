<?php

namespace App\Contracts\Auth;

use App\Dtos\Auth\LoginDto;
use GrahamCampbell\ResultType\Result;

interface LoginContract
{
    /**
     * @return Result<User, string>
     */
    public function execute(LoginDto $data): Result;
}
