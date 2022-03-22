<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


function createUser($request)
{

    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6|confirmed',
    ]);

    return $validator->fails() ? response()->json([
        'message' => 'Validation Error',
        'errors' => $validator->errors()
    ], 422) : response()->json(['userWithToken' => User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ])->createToken('Personal Access Token'), 'message' => 'User Created Successfully'], 200);
}
