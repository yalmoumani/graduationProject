<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("roles_users", function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger("roleID");
            $table->unsignedBigInteger("userID");

                $table->foreign('roleID')->references('id')
                     ->on('roles')->onDelete('cascade');
                $table->foreign('userID')->references('id')
                    ->on('users')->onDelete('cascade');

                $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
