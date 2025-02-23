import asyncHandler from "express-async-handler";
import express from "express";
import Patient from "./patientModel.js";

const router = express.Router();

router.get(
    "/getPatients",
    asyncHandler(async (req, res) => {
        try {
            const patients = await Patient.find(); // Fetch all patients
            res.status(200).json(patients);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching patients",
                error: error.message,
            });
        }
    })
);

router.post(
    "/createPatient",
    asyncHandler(async (req, res) => {
        try {
            // Create a new patient record
            const {
                patientFirstName,
                surname,
                dob,
                gender,
                address,
                phoneNumber,
                email,
                gpAddress,
                gpName,
                gpPhone,
            } = req.body;

            const newPatient = new Patient({
                patientFirstName,
                surname,
                dob,
                gender,
                address,
                phoneNumber,
                email,
                gpAddress,
                gpName,
                gpPhone,
            });

            // Save the patient record to the database
            await newPatient.save();

            // Send response back to the client
            res.status(201).json({
                message: "Patient created successfully",
                patient: newPatient,
            });
        } catch (error) {
            // Handle any errors that occur during patient creation
            console.error(error);
            res.status(500).json({
                message: "Server error. Unable to create patient.",
            });
        }
    })
);

export default router;
