import { useEffect } from "react";
import Layout from "./components/layout/index.js";
import HomePage from "./pages/homePage.js";
import LoginPage from "./pages/loginPage.js";
import SignUpPage from "./pages/signUpPage.js";
import DashboardPage from "./pages/dashboardPage.js";
import PatientsPage from "./pages/patientsPage.js";
import PatientPage from "./pages/patientProfilePage.js";
import AuthContextProvider from "./contexts/authContext.js";
import { SnackbarProvider } from "./contexts/snackbarContext.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
    useEffect(() => {
        document.body.style.margin = 0;
    }, []);
    return (
        <AuthContextProvider>
            <SnackbarProvider>
                <BrowserRouter>
                    <Routes>
                        {/* Routes that do not use Layout */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />

                        {/* Routes that should use Layout */}
                        <Route path="/" element={<Layout />}>
                            <Route
                                path="dashboard"
                                element={<DashboardPage />}
                            />
                            <Route path="patients" element={<PatientsPage />} />
                            <Route
                                path="patients/patient"
                                element={<Navigate to="/patients" />}
                            />
                            <Route
                                path="patients/patient/:id"
                                element={<PatientPage />}
                            />
                        </Route>

                        {/* Catch-all route */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </AuthContextProvider>
    );
}

export default App;
