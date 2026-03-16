<?php

namespace App\Errors;

enum ErrorTypes
{
    case Authentication;
    case Authorization;
    case Conflict;
    case Internal;
    case NotFound;
    case Validation;
}
