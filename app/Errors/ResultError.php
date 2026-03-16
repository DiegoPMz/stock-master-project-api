<?php

namespace App\Errors;

readonly class ResultError
{
    public function __construct(
        public string $code,
        public string $message,
        public ErrorTypes $errorType,
        public array $metadata = []
    ) {}
}
