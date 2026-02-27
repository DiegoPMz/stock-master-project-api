<?php

namespace App\Http\Requests\Auth;

use App\Dtos\Auth\RegisterDto;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
            'full_name' => ['required', 'string', 'min:2', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', Password::defaults()],
            'confirmed_password' => ['required', 'same:password'],
        ];
    }

    public function messages(): array
    {
        return [
            // Full Name
            'full_name.required' => 'We need to know your name to create your account.',
            'full_name.min' => 'Your name seems a bit too short.',

            // Email
            'email.email' => 'This doesn’t look like a valid email address.',
            'email.unique' => 'This email is already registered. Try logging in instead.',

            // Password
            'password.required' => 'A secure password is required.',

            // Confirm Password
            'confirmed_password.required' => 'Please confirm your password.',
            'confirmed_password.same' => 'The password confirmation does not match.',
        ];
    }

    /**
     * Transform the validated request into a business object.
     */
    public function toDto(): RegisterDto
    {
        return new RegisterDto(
            email: $this->validated('email'),
            password: $this->validated('password'),
            confirmed_password: $this->validated('confirmed_password'),
            full_name : $this->validated('full_name')
        );
    }
}
