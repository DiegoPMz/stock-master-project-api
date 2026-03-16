<?php

namespace App\Dtos\Common;

final readonly class PaginationDto
{
    public function __construct(
        public ?int $limit,
        public ?string $cursor,
    ) {}

    public static function fromRequest(array $validated): self
    {
        return new self(
            limit: $validated['limit'] ?? null,
            cursor: $validated['cursor'] ?? null,
        );
    }
}
