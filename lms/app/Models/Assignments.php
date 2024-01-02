<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignments extends Model
{
    use HasFactory;

    protected $fillable = [
        "assignmentName",
        "assignmentDescription",
        "dueDate",
        "openDate",
        "status",
        "courseID",
        "grade",
    ];

    public function course(){
     $this->belongsTo(Courses::class);
    }
}
