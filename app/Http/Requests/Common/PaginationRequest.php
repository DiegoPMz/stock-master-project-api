<?php

namespace App\Http\Requests\Common;

use App\Dtos\Common\PaginationDto;
use Illuminate\Foundation\Http\FormRequest;

class PaginationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'limit' => ['nullable', 'integer', 'min:1', 'max:100'],
            'cursor' => ['nullable', 'string'],
        ];
    }

    public function toDto(): PaginationDto
    {
        return PaginationDto::fromRequest(
            $this->validated()
        );
    }
}
