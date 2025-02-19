import Box from "@mui/material/Box";
import { Typography, Divider } from "@mui/material";

const DashboardPage = () => {
    return (
        <Box>
            <Typography variant="h4">Dashboard</Typography>
            <Box sx={{ mb: 4 }}>
                <Divider />
            </Box>
            <Typography sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Typography>
        </Box>
    );
};

export default DashboardPage;
