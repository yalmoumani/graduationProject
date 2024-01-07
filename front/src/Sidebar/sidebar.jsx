import React from "react";
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faBook, faUserGraduate, faPen, faMessage } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><FontAwesomeIcon icon={faGauge} className="icon" style={{ color: "#fcfcfc" }} />Dashboard</li>
                <li><FontAwesomeIcon icon={faBook} className="icon" style={{ color: "#ffffff" }} />Courses</li>
                <li><FontAwesomeIcon icon={faUserGraduate} className="icon" style={{ color: "#ffffff" }} />Gradebook</li>
                <li><FontAwesomeIcon icon={faPen} className="icon" style={{ color: "#ffffff" }} />Assignments</li>
                <li><FontAwesomeIcon icon={faMessage} className="icon" style={{ color: "#ffffff" }} />Messages</li>
            </ul>
        </div>
    );
};