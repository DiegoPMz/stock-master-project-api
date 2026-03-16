<?php

namespace App\Http\Requests\Category;

use App\Dtos\Category\StoreCategoryDto;
use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'min:1', 'max:200'],
        ];
    }

    /**
     * Transform the validated request into a business object.
     */
    public function toDto(): StoreCategoryDto
    {

        return StoreCategoryDto::fromRequest(
            $this->validated(),
            $this->user()->id
        );
    }
}
