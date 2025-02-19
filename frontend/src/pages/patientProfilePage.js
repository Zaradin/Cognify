import { Box, Typography } from "@mui/material";

const PatientPage = () => {
    return (
        <Box>
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
        </Box>
    );
};

export default PatientPage;
