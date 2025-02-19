import {
    Box,
    Typography,
    Grid,
    Avatar,
    Paper,
    Divider,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";

// Dummy patient data (Replace with actual data from API)
const patientData = {
    fullName: "John Doe",
    patientId: "123456",
    dob: "01/01/1980",
    gender: "Male",
    address: "123 Main Street, Dungarvan, Ireland",
    phoneNumber: "+353 087 343 8392",
    gp: "Dr. Smith",
    gpAddress: "Spring (Duke), Dungarvan, Co. Waterford",
    diagnosis: "Hypertension",
    checkups: [
        {
            date: "2024-01-15",
            doctor: "Dr. Smith",
            notes: "Routine checkup, BP stable.",
        },
        {
            date: "2023-12-10",
            doctor: "Dr. Adams",
            notes: "Patient reported mild headaches.",
        },
    ],
    imaging: [
        { type: "MRI Brain", date: "2024-02-05" },
        { type: "X-ray Chest", date: "2023-11-20" },
    ],
    imageUrl: "", // If patient has an image, provide URL
};

const PatientPage = () => {
    const { id } = useParams(); // Capture patient ID from URL

    return (
        <Box>
            <Typography variant="h4">Patient Profile</Typography>
            <Box sx={{ mb: 4 }}>
                <Divider />
            </Box>

            {/* Patient Info Box */}
            <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
                <Grid container spacing={3} alignItems="center">
                    {/* Left Side - Avatar */}
                    <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                        <Avatar
                            sx={{
                                width: 120,
                                height: 120,
                                fontSize: 40,
                                bgcolor: "#1976d2",
                                color: "white",
                                margin: "auto",
                            }}
                            src={patientData.imageUrl}
                        >
                            {!patientData.imageUrl
                                ? patientData.fullName.charAt(0)
                                : ""}
                        </Avatar>
                        <Typography
                            variant="h6"
                            sx={{ mt: 1, fontWeight: "bold" }}
                        >
                            {patientData.fullName}
                        </Typography>
                    </Grid>

                    {/* Right Side - Patient Details */}
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={2}>
                            {[
                                {
                                    label: "Patient ID",
                                    value: id,
                                },
                                { label: "DOB", value: patientData.dob },
                                { label: "Gender", value: patientData.gender },
                                {
                                    label: "Address",
                                    value: patientData.address,
                                },
                                {
                                    label: "Phone",
                                    value: patientData.phoneNumber,
                                },
                                { label: "GP", value: patientData.gp },
                                {
                                    label: "GP Address",
                                    value: patientData.gpAddress,
                                },
                                {
                                    label: "Diagnosis",
                                    value: patientData.diagnosis,
                                },
                            ].map((field, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {field.label}:
                                    </Typography>
                                    <Typography>{field.value}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            {/* Checkups & Doctors Notes */}
            <Grid container spacing={3}>
                {/* GP Visits Section */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            GP Visits
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        {/* Iterate through the checkups */}
                        {patientData.checkups.map((visit, index) => (
                            <Accordion key={index} sx={{ mb: 2 }}>
                                {/* Accordion Summary (GP Visit with Date and GP Name) */}
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel-${index}-content`}
                                    id={`panel-${index}-header`}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {visit.date} - {visit.doctor}
                                    </Typography>
                                </AccordionSummary>
                                {/* Accordion Details (Doctor's Notes) */}
                                <AccordionDetails>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            Main Notes:
                                        </Typography>
                                        <Typography variant="body2">
                                            {/* Short version of the notes */}
                                            {visit.notes.length > 200
                                                ? `${visit.notes.substring(
                                                      0,
                                                      200
                                                  )}...`
                                                : visit.notes}
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Paper>
                </Grid>

                {/* Imaging History Section */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }} elevation={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Imaging History
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {patientData.imaging.map((image, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{image.type}</TableCell>
                                            <TableCell>{image.date}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    View
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PatientPage;
