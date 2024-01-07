import React from "react";
import "./studentDashboard.css";
import Students from "../../Images/logos/students.jpg";
export const StudentDashboard = () => {
return (
<div class="student-dashboard">
<h1>Dashboard</h1>
<div class="dropdown open">
    <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="triggerId"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
    >
        Dropdown Button
    </button>
    <div class="dropdown-menu" aria-labelledby="triggerId">
        <button class="dropdown-item" href="#">Show all courses</button>
        <button class="dropdown-item" href="#">Show finished courses</button>
        <button class="dropdown-item disabled" href="#">
            Disabled action
        </button>
    </div>
</div>

<hr />
<div className="cards">
   <a href="/"> <div className="card">
        <div className="image">
            <img src={Students} alt="" />
        </div>
        <div className="title">
<p>Biology</p>
        </div>
    </div></a>
</div>
   
</div>
)
}