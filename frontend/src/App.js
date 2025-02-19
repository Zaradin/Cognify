import { useEffect } from "react";
import HomePage from "./pages/homePage.js";
import LoginPage from "./pages/loginPage.js";
import DashboardPage from "./pages/dashboardPage.js";
import PatientsPage from "./pages/patientsPage.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
    useEffect(() => {
        document.body.style.margin = 0;
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/patients" element={<PatientsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
