import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { DesktopMainPage } from './Main/main'; 
import { Login } from './Login/login';
import { StudentDashboard } from './Dashboard/Students/studentDashboard';
import { Navigations } from './Navbar/navigation';
import { Resource } from './Resources/resources';
export const Direction = () => {
    return(
        <Router>
        <Routes>
        <Route path="/" element={<DesktopMainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sDashboard" element={<StudentDashboard />} />
        <Route path="/navigation" element={<Navigations />} />
        <Route path="/resources" element={<Resource />} />

        </Routes>
             </Router>
    )

}