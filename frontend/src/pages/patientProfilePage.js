import AppNav from "../components/appNav";
import DynamicBreadcrumbs from "../components/breadcrumbs";
import { Box, Typography, Toolbar, Divider } from "@mui/material";

const PatientPage = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <AppNav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <DynamicBreadcrumbs />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 1,
                    }}
                >
                    <Typography variant="h4">Patient Profile</Typography>
                </Box>

                <Divider sx={{ marginBottom: 4 }} />
            </Box>
        </Box>
    );
};

export default PatientPage;
