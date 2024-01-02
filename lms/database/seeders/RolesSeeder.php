<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            ['roleName' => 'Administrator', 'created_at' => now(), 'updated_at' => now()],
            ['roleName' => 'Teacher', 'created_at' => now(), 'updated_at' => now()],
            ['roleName' => 'Student', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }
}
