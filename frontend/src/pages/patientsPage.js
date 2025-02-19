import AppNav from "../components/appNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import DynamicBreadcrumbs from "../components/breadcrumbs";

const PatientsPage = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <AppNav />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <Toolbar />
                {/* Breadcrumbs */}
                <Box sx={{ flexGrow: 1 }}>
                    <DynamicBreadcrumbs />
                </Box>
                <Typography variant="h4">Patients</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </Typography>
            </Box>
        </Box>
    );
};

export default PatientsPage;
