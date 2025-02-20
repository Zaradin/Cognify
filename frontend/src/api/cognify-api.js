export const getPatients = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_NODE_API_ENDPOINT_URL}/api/getPatients`,
        {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            },
        }
    );
    return response.json();
};
