<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory;
    protected $fillable = [
        "roleName",
    ];

    public function users(){
        $this->belongsToMany(User::class, 'roles_users','roleID','userID');
    }
}
