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
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->enum('examType', ['Midterm', 'Final']);
            $table->dateTime('startDate')->nullable();
            $table->dateTime('closingDate')->nullable();
            $table->integer('availableTime')->nullable();
            $table->bigInteger('courseID')->unsigned()->nullable();
            $table->foreign('courseID')->constrained('exams_courseID')->references('id')->on('courses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exams');
    }
};
