<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Pagination\PaginationState;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AdminstratorController extends Controller
{public function createUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => 'required|string',
            "mobile" => 'required|regex:/^07\d{8}$/',
            "emergencyContact" => 'required|regex:/^07\d{8}$/',
            "dob" => 'required|date|before:-15 years',
            "email" => 'required|email|max:250|unique:users',
            "password" =>'required|string|min:8|max:12|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
            "roleID" => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(["errors" => $validator->errors()], 422);
        }

        $user = User::create([
            "name" => $request->name,
            "mobile" => $request->mobile,
            "emergencyContact" => $request->emergencyContact,
            "dob" => $request->dob,
            "email" => $request->email,
            "password" => bcrypt($request->password),
            "userImg" => $request->userImg,
        ]);

        $roleID = $request->roleID;

        DB::table('roles_users')->insert([
            'roleID' => $roleID,
            'userID' => $user->id,
        ]);

        return response()->json(["message" => "User created successfully"], 201);
    }

    public function editUser(Request $request)
    {
        $userId = $request->input('userId');
        $user = User::find($userId);

        if (!$user) {
            return response()->json(["error" => "User not found"], 404);
        }

        $validator = Validator::make($request->all(), [
            "name" => 'nullable|string',
            "mobile" => 'nullable|regex:/^07\d{8}$/',
            "emergencyContact" => 'nullable|regex:/^07\d{8}$/',
            "dob" => 'nullable|date|before:-15 years',
            "email" => 'nullable|email|max:250|unique:users,email,' . $userId,
            "password" => 'nullable|string|min:8|max:12|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
            "roleID" => 'nullable'
        ]);

        if ($validator->fails()) {
            return response()->json(["errors" => $validator->errors()], 422);
        }

        $user->name = $request->input('name', $user->name);
        $user->mobile = $request->input('mobile', $user->mobile);
        $user->emergencyContact = $request->input('emergencyContact', $user->emergencyContact);
        $user->dob = $request->input('dob', $user->dob);
        $user->email = $request->input('email', $user->email);

        if ($request->has('password')) {
            $user->password = bcrypt($request->input('password'));
        }

        if ($request->has('roleID')) {
            $user->roles()->detach();
            $user->roles()->attach($request->input('roleID'));
        }

        $user->save();

        return response()->json(["message" => "User updated successfully"], 200);

    }
    public function deleteUser(Request $request){
    $userId = $request->input('userId');

    $user = User::find($userId);

    if (!$user) {
        return response()->json(["error" => "User not found"], 404);
    }

    $user->delete();

    return response()->json(["message" => "User deleted successfully"], 200);
}
    public function getAll()
{
    $users = User::paginate(15);
    return $users;
}
}
