import React from "react";
import "./studentDashboard.css";
import { Sidebar } from "../../Sidebar/sidebar";
import { Navigations } from "../../Navbar/navigation";
import Footer from "../../Footer/footer";
export const StudentDashboard = () => {
return (
<div class="student-dashboard">
    <Navigations />
    <h1> Welcome Back, User!</h1>
    <Sidebar />
    <div className="cards">
        <div className="card">
            <div className="img">

            </div>
            <div className="bottom">
             <p>Biology 101</p>
            </div>
        </div>
    </div>

    <div className="assignmentTable">
        <h3>Upcoming Assignments</h3>
        <table>
            <tr>
                <th id="week">This Week</th>
                <th>Course</th>
                <th>Assignment</th>
                <th id="date">Due Date</th>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
            <tr>
                <td>Monday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>Biology 101</td>
                <td>Quiz - Chapter 3</td>
                <td>2/4/2024 9:00om</td>
            </tr>
        </table>
    </div>
    <Footer />

</div>
)
}