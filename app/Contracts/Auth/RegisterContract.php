<?php

namespace App\Contracts\Auth;

use App\Dtos\Auth\RegisterDto;
use GrahamCampbell\ResultType\Result;

interface RegisterContract
{
    /**
     * @return Result<User, string>
     */
    public function execute(RegisterDto $data): Result;
}
