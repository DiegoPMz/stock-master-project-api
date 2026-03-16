<?php

namespace App\Contracts\Auth;

use App\Dtos\Auth\LoginDto;
use App\Errors\ResultError;
use GrahamCampbell\ResultType\Result;

interface LoginContract
{
    /**
     * @return Result<User, ResultError>
     */
    public function execute(LoginDto $data): Result;
}
