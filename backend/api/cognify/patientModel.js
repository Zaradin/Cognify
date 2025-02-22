const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
    {
        patientFirstName: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[0-9]{13}$/.test(v);
                },
                message: "Phone number must be 10 digits.",
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/\S+@\S+\.\S+/, "Please use a valid email address."],
        },
        gpAddress: {
            type: String,
            required: true,
        },
        gpName: {
            type: String,
            required: true,
        },
        gpPhone: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[0-9]{13}$/.test(v);
                },
                message: "GP phone number must be 10 digits.",
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Patient", PatientSchema);
