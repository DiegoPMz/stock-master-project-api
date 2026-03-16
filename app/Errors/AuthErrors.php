<?php

namespace App\Errors;

final readonly class AuthErrors
{
    public static function invalidCredentials(): ResultError
    {
        return new ResultError(
            'Auth.InvalidCredentials',
            'The provided credentials are invalid.',
            ErrorTypes::Authentication
        );
    }

    public static function sessionExpired(): ResultError
    {
        return new ResultError(
            'Auth.SessionExpired',
            'The session has expired. Please log in again.',
            ErrorTypes::Authentication
        );
    }
}
