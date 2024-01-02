<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class SemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('semesters')->insert([
            ['semesterName' => 'Fall', 'created_at' => now(), 'updated_at' => now()],
            ['semesterName' => 'Spring', 'created_at' => now(), 'updated_at' => now()],
            ['semesterName' => 'Summer', 'created_at' => now(), 'updated_at' => now()]
        ]);    }
}
