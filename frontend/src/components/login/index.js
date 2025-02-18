import { useState } from "react";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        // TODO: Add authentication logic here
        console.log("Logging in with:", { email, password });
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            position="relative"
        >
            {/* Close Button (Top Right) */}
            <IconButton
                onClick={() => navigate("/")}
                sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                }}
            >
                <Close />
            </IconButton>

            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    width: 300,
                    p: 3,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "#fff",
                }}
            >
                <Typography variant="h5" mb={2} textAlign="center">
                    Login
                </Typography>

                {error && (
                    <Typography color="error" mb={2} textAlign="center">
                        {error}
                    </Typography>
                )}

                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
