import {
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const MedicationInfo = ({ patientData }) => {
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
                Medication History
            </Typography>
            <TableContainer
                sx={{
                    maxHeight: 300, // Set max height for scrollable area
                    overflowY: "auto", // Enables vertical scrolling if content exceeds maxHeight
                }}
            >
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {[
                                "Medication",
                                "Dose",
                                "Frequency",
                                "Prescribed Amount",
                                "Prescribed On",
                                "Prescribed By",
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
                        {patientData.medications.length > 0 ? (
                            patientData.medications.map((med, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:nth-of-type(even)": {
                                            backgroundColor: "#f9f9f9",
                                        },
                                    }}
                                >
                                    <TableCell>{med.name}</TableCell>
                                    <TableCell>{med.dose}</TableCell>
                                    <TableCell>{med.frequency}</TableCell>
                                    <TableCell>{med.amount}</TableCell>
                                    <TableCell>{med.prescribedOn}</TableCell>
                                    <TableCell>{med.prescribedBy}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    align="center"
                                    sx={{
                                        fontStyle: "italic",
                                        color: "#9e9e9e",
                                    }}
                                >
                                    No medications found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default MedicationInfo;
