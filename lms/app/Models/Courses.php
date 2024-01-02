<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    use HasFactory;
    protected $fillable = [
        "id","courseName","courseDescription",
    ];

    public function id()
    {
        return $this->belongsTo(Exams::class);
    }
    public function students()
    {
        return $this->belongsToMany(User::class,'courseID','userID');
    }
}
