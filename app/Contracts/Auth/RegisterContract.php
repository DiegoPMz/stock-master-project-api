<?php

namespace App\Contracts\Auth;

use App\Dtos\Auth\RegisterDto;
use App\Errors\ResultError;
use GrahamCampbell\ResultType\Result;

interface RegisterContract
{
    /**
     * @return Result<User, ResultError>
     */
    public function execute(RegisterDto $data): Result;
}
