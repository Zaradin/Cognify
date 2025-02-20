import { Box, Typography, Grid, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import PatientInfo from "../components/patientProfile/patientInfoBox";
import MedicationInfo from "../components/patientProfile/medicationInfoBox";
import GPVists from "../components/patientProfile/gpVistsBox";
import ImagingInfo from "../components/patientProfile/imagingInfoBox";

const PatientPage = () => {
    const { id } = useParams(); // Capture patient ID from URL

    // Dummy patient data (Replace with actual data from API)
    const patientData = {
        fullName: "John Doe",
        patientId: id,
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
                note: "This is what the doctor said and explains stuff in more detail",
                summary: "Routine checkup, BP stable.",
                refered: "Yes",
            },
            {
                date: "2023-12-10",
                doctor: "Dr. Adams",
                note: "This is what the doctor said and explains stuff in more detail",
                summary: "Patient reported mild headaches.",
                refered: "No",
            },
        ],
        imaging: [
            {
                type: "MRI",
                date: "2024-02-05",
                studyDescription: "Brain MRI",
                seriesDescription: "T1-weighted",
                sliceThickness: "1.0",
                resolution: "512x512",
            },
            {
                type: "CT",
                date: "2023-12-15",
                studyDescription: "Chest CT",
                seriesDescription: "Contrast-enhanced",
                sliceThickness: "2.5",
                resolution: "256x256",
            },
            {
                type: "X-ray",
                date: "2023-11-20",
                studyDescription: "Chest X-ray",
                seriesDescription: "PA View",
                sliceThickness: "N/A",
                resolution: "1024x1024",
            },
        ],
        medications: [
            {
                name: "Lisinopril",
                dose: "10mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2024-01-05",
                prescribedBy: "Dr John Jones",
            },
            {
                name: "Amlodipine",
                dose: "5mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2023-12-10",
                prescribedBy: "Dr John Jones",
            },
            {
                name: "Atorvastatin",
                dose: "20mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2023-11-25",
                prescribedBy: "Dr John Jones",
            },
            {
                name: "Atorvastatin",
                dose: "20mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2023-11-25",
                prescribedBy: "Dr John Jones",
            },
            {
                name: "Atorvastatin",
                dose: "20mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2023-11-25",
                prescribedBy: "Dr John Jones",
            },
            {
                name: "Atorvastatin",
                dose: "20mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2023-11-25",
                prescribedBy: "Dr John Jones",
            },
            {
                name: "Atorvastatin",
                dose: "20mg",
                frequency: "Once daily",
                amount: "30 tablets",
                prescribedOn: "2023-11-25",
                prescribedBy: "Dr John Jones",
            },
        ],
        imageUrl: "", // If patient has an image, provide URL
    };

    return (
        <Box>
            <Typography variant="h4">Patient Profile</Typography>
            <Box sx={{ mb: 4 }}>
                <Divider />
            </Box>

            {/* Patient Info & Medication History */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <PatientInfo patientData={patientData} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <MedicationInfo patientData={patientData} />
                </Grid>
            </Grid>

            {/* Add margin to separate sections */}
            <Box sx={{ mt: 4 }} />

            {/* Checkups & Imaging History */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <GPVists patientData={patientData} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <ImagingInfo patientData={patientData} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PatientPage;
