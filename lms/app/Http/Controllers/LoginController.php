<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = $user->createToken('authToken')->plainTextToken;

            return response()->json(['access_token' => $accessToken], 200);
        }

        throw ValidationException::withMessages([
            'email' => ['Invalid credentials'],
        ]);
    }
}
