<?php

namespace App\Dtos\Common;

use Illuminate\Contracts\Pagination\CursorPaginator;

final readonly class MetaData
{
    private function __construct(
        public int $per_page,
        public ?string $current_cursor,
        public ?string $next_cursor,
        public ?string $prev_cursor,
        public bool $has_more
    ) {}

    public static function create(CursorPaginator $paginator): self
    {
        return new MetaData(
            $paginator->perPage(),
            $paginator->cursor()?->encode(),
            $paginator->nextCursor()?->encode(),
            $paginator->previousCursor()?->encode(),
            $paginator->hasMorePages()
        );
    }
}

final readonly class Links
{
    private function __construct(
        public ?string $next_page_url,
        public ?string $prev_page_url,
    ) {}

    public static function create(CursorPaginator $paginator): self
    {
        return new Links(
            $paginator->nextPageUrl(),
            $paginator->previousPageUrl()
        );
    }
}

final readonly class PaginatorCursorDto
{
    private function __construct(
        public array $data,
        public MetaData $meta,
        public Links $links
    ) {}

    public static function create(CursorPaginator $paginator): self
    {
        return new PaginatorCursorDto(
            $paginator->items(),
            MetaData::create($paginator),
            Links::create($paginator)
        );
    }
}
