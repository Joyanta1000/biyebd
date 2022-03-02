<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/tokens/create', function (Request $request) {
    $user = User::where('email', $request->email)->first();
    $checked = Hash::check($request->password, $user->password);
    if ($checked) {
        $token = $user->createToken('Personal Access Token');
        return response()->json(['token' => $token, 'user' => $user]);
    } else {
        return response()->json(['error' => 'Invalid credentials'], 401);
    }
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['loggedOut' => 'Logged Out Successfully'], 401);
})->middleware('auth:sanctum');
