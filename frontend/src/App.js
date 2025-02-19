import { useEffect } from "react";
import HomePage from "./pages/homePage.js";
import LoginPage from "./pages/loginPage.js";
import DashboardPage from "./pages/dashboardPage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
