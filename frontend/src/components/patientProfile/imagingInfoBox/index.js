import {
    Typography,
    Divider,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const ImagingInfo = ({ patientData }) => {
    const handleViewImage = (e) => {
        console.log(e);
    };
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
                Imaging History
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {[
                                "Modality",
                                "Date",
                                "Study",
                                "Series",
                                "Slice Thickness (mm)",
                                "Resolution",
                                "Action",
                            ].map((col, index) => (
                                <TableCell
                                    key={index}
                                    sx={{
                                        fontWeight: "bold",
                                        backgroundColor: "#f5f5f5", // Light background for header
                                        color: "#1976d2", // Emphasize header text
                                    }}
                                >
                                    {col}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {patientData.imaging.map((image, index) => (
                            <TableRow key={index}>
                                <TableCell>{image.type}</TableCell>
                                <TableCell>{image.date}</TableCell>
                                <TableCell>{image.studyDescription}</TableCell>
                                <TableCell>{image.seriesDescription}</TableCell>
                                <TableCell>{image.sliceThickness}</TableCell>
                                <TableCell>{image.resolution}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() =>
                                            handleViewImage(image.url)
                                        }
                                    >
                                        Open Image Viewer
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ImagingInfo;
