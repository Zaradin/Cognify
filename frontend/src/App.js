import { useEffect } from "react";
import Layout from "./components/layout/index.js";
import HomePage from "./pages/homePage.js";
import LoginPage from "./pages/loginPage.js";
import SignUpPage from "./pages/signUpPage.js";
import DashboardPage from "./pages/dashboardPage.js";
import PatientsPage from "./pages/patientsPage.js";
import PatientPage from "./pages/patientProfilePage.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./contexts/authContext.js";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes.js";
import { SnackbarProvider } from "./contexts/snackbarContext.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    useEffect(() => {
        document.body.style.margin = 0;
    }, []);
    return (
        <QueryClientProvider client={queryClient}>
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
                                {/* Protected Auth Routes should be within this */}
                                <Route element={<ProtectedRoutes />}>
                                    <Route
                                        path="dashboard"
                                        element={<DashboardPage />}
                                    />
                                    <Route
                                        path="patients"
                                        element={<PatientsPage />}
                                    />
                                    <Route
                                        path="patients/patient"
                                        element={<Navigate to="/patients" />}
                                    />
                                    <Route
                                        path="patients/patient/:id"
                                        element={<PatientPage />}
                                    />
                                </Route>
                            </Route>

                            {/* Catch-all route */}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </BrowserRouter>
                </SnackbarProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}

export default App;
