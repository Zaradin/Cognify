import { Box, Typography, Paper, Card, CardContent } from "@mui/material";

const GPVists = ({ patientData }) => {
    return (
        <Paper
            sx={{
                p: 1,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#fff",
                paddingTop: "13px",
                paddingBottom: "13px",
            }}
            elevation={3}
        >
            <Typography
                variant="h6"
                sx={{
                    mb: 3,
                    fontWeight: "bold",
                    color: "#1976d2",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 1,
                }}
            >
                GP Visits
            </Typography>

            {patientData.checkups.length > 0 ? (
                patientData.checkups.map((visit, index) => (
                    <Card
                        key={index}
                        sx={{
                            mb: 2,
                            boxShadow: 2,
                            transition: "transform 0.2s, box-shadow 0.2s",
                            "&:hover": {
                                boxShadow: 5, // Deeper shadow on hover
                                transform: "scale(1.02)", // Slight expansion
                                cursor: "pointer", // Makes it feel interactive
                            },
                        }}
                        onClick={() =>
                            console.log(`Clicked visit on ${visit.date}`)
                        } // Placeholder for modal
                    >
                        <CardContent>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold", color: "#1976d2" }}
                            >
                                {visit.date} - {visit.doctor}
                            </Typography>

                            <Box sx={{ mt: 1 }}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Summary:
                                </Typography>
                                <Typography variant="body2">
                                    {visit.summary}
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 1 }}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Doctor’s Note:
                                </Typography>
                                <Typography variant="body2">
                                    {visit.note.length > 200
                                        ? `${visit.note.substring(0, 200)}...`
                                        : visit.note}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography
                    variant="body2"
                    sx={{ color: "#9e9e9e", fontStyle: "italic" }}
                >
                    No GP visits recorded.
                </Typography>
            )}
        </Paper>
    );
};

export default GPVists;
