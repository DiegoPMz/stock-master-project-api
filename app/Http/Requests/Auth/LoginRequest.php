<?php

namespace App\Http\Requests\Auth;

use App\Dtos\Auth\LoginDto;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required|string',
            'remember' => 'boolean',
        ];
    }

    public function messages(): array
    {
        return [
            // Email messages
            'email.required' => 'Please enter your email address.',
            'email.email' => 'The email address format is invalid.',

            // Password messages
            'password.required' => 'Please enter your password.',
            'password.string' => 'The password must be a valid text string.',

            // Remember messages
            'remember.boolean' => 'The remember me option must be true or false.',
        ];
    }

    /**
     * Transform the validated request into a business object.
     */
    public function toDto(): LoginDto
    {
        return new LoginDto(
            email: $this->validated('email'),
            password: $this->validated('password'),
            remember: $this->boolean('remember')
        );
    }
}
