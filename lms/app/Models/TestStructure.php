<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestStructure extends Model
{
    use HasFactory;
    protected $fillable = ["examID","structureData"];

}
