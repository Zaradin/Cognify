export const getPatients = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_NODE_API_ENDPOINT_URL}/api/getPatients`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: window.localStorage.getItem("token"),
            },
        }
    );
    return response.json();
};

export const createPatient = async (patientData) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_NODE_API_ENDPOINT_URL}/api/createPatient`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: window.localStorage.getItem("token"),
                },
                body: JSON.stringify(patientData),
            }
        );

        if (!response.ok) {
            throw new Error("Error creating patient");
        }

        return response.json(); // Assuming the API returns the created patient or some status
    } catch (error) {
        console.error("Failed to create patient:", error);
        throw error;
    }
};
