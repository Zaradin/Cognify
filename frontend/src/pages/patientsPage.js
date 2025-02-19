import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PatientsPage = () => {
    const [searchParams, setSearchParams] = useState({
        patientId: "",
        patientName: "",
        dob: "",
        address: "",
        fromDate: "",
        toDate: "",
        doctorName: "",
        diagnosis: "",
    });

    // Placeholder patient data
    const patients = [
        {
            id: "1",
            name: "John Doe",
            dob: "1990-05-01",
            address: "123 Main St",
            enteredDate: "2022-01-15",
            doctorName: "Dr. Smith",
            diagnosis: "Pending",
        },
        {
            id: "2",
            name: "Jane Smith",
            dob: "1985-09-20",
            address: "456 Oak St",
            enteredDate: "2023-02-10",
            doctorName: "Dr. Johnson",
            diagnosis: "Alzheimer's Disease (AD)",
        },
    ];

    const handleSearchChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value,
        });
    };

    const handleResetButton = () => {
        setSearchParams({
            patientId: "",
            patientName: "",
            dob: "",
            fromDate: "",
            toDate: "",
            doctorName: "",
            address: "",
            diagnosis: "",
        });
    };

    const filteredPatients = patients.filter((patient) => {
        const isNameMatch = patient.name
            .toLowerCase()
            .includes(searchParams.patientName.toLowerCase());
        const isIdMatch = patient.id.includes(searchParams.patientId);
        const isDateInRange =
            (!searchParams.fromDate ||
                new Date(patient.enteredDate) >=
                    new Date(searchParams.fromDate)) &&
            (!searchParams.toDate ||
                new Date(patient.enteredDate) <= new Date(searchParams.toDate));
        const isDoctorMatch = patient.doctorName
            .toLowerCase()
            .includes(searchParams.doctorName.toLowerCase());
        const isAddressMatch = patient.address
            .toLowerCase()
            .includes(searchParams.address.toLowerCase());
        const isDobMatch =
            !searchParams.dob || patient.dob.includes(searchParams.dob);
        const isDiagnosisMatch =
            !searchParams.diagnosis ||
            patient.diagnosis
                .toLowerCase()
                .includes(searchParams.diagnosis.toLowerCase());

        return (
            isNameMatch &&
            isIdMatch &&
            isDateInRange &&
            isDoctorMatch &&
            isAddressMatch &&
            isDobMatch &&
            isDiagnosisMatch
        );
    });

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
                <Typography variant="h4">Patients</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ textTransform: "none" }}
                >
                    Create Patient
                </Button>
            </Box>

            {/* Search and Filter Box */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    p: 2,
                    marginBottom: 3,
                }}
            >
                <TextField
                    label="Patient ID"
                    variant="outlined"
                    size="small"
                    name="patientId"
                    value={searchParams.patientId}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="Patient Name"
                    variant="outlined"
                    size="small"
                    name="patientName"
                    value={searchParams.patientName}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="DOB"
                    variant="outlined"
                    size="small"
                    type="date"
                    name="dob"
                    value={searchParams.dob}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    size="small"
                    name="address"
                    value={searchParams.address}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="Doctor Name"
                    variant="outlined"
                    size="small"
                    name="doctorName"
                    value={searchParams.doctorName}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="Diagnosis"
                    variant="outlined"
                    size="small"
                    name="diagnosis"
                    value={searchParams.diagnosis}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="From Date"
                    variant="outlined"
                    size="small"
                    type="date"
                    name="fromDate"
                    value={searchParams.fromDate}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="To Date"
                    variant="outlined"
                    size="small"
                    type="date"
                    name="toDate"
                    value={searchParams.toDate}
                    onChange={handleSearchChange}
                    sx={{ marginRight: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    variant="outlined"
                    color="black"
                    onClick={handleResetButton}
                    sx={{ marginRight: 2 }}
                >
                    Reset
                </Button>
                <Button variant="contained" color="primary">
                    Search
                </Button>
            </Box>

            <Box sx={{ border: "1px solid #ddd", borderRadius: 1, p: 2 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="patient table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Patient ID</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Patient Name</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>DOB</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Address</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Date (Entered)</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Doctor Name</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Diagnosis</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>View</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredPatients.map((patient, index) => (
                                <TableRow
                                    key={patient.id}
                                    sx={{
                                        backgroundColor:
                                            index % 2 === 0
                                                ? "#f5f5f5"
                                                : "white",
                                    }}
                                >
                                    <TableCell>{patient.id}</TableCell>
                                    <TableCell>{patient.name}</TableCell>
                                    <TableCell>{patient.dob}</TableCell>
                                    <TableCell>{patient.address}</TableCell>
                                    <TableCell>{patient.enteredDate}</TableCell>
                                    <TableCell>{patient.doctorName}</TableCell>
                                    <TableCell>{patient.diagnosis}</TableCell>
                                    <TableCell>
                                        <Link
                                            to={`/patients/patient/${patient.id}`}
                                            style={{
                                                textDecoration: "none",
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="success"
                                                size="small"
                                                startIcon={<RemoveRedEyeIcon />}
                                                sx={{
                                                    textTransform: "none",
                                                }}
                                            >
                                                View
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default PatientsPage;
