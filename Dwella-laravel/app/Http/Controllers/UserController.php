<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // Validate the data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'service_type' => 'required|string|in:offering,using', 
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'service_type' => $request->service_type,
        ]);

        return response()->json(['message' => 'User registered successfully, please log in'], 201);
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)){
            $user = Auth::user();
            return response()->json([
                'status' => 'success',
                'message' => 'Login successfull',
                'serviceType' => $user->service_type
            ]);
        } else{
            return response()->json(['status' => 'error', 'message' => 'invalid email or password'], 401);
        }
    }
}

