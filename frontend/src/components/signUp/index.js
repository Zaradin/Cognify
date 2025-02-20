import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    InputAdornment,
    Link,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import brainImage from "../../images/Brain.svg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // TODO: Add signup logic here (e.g., API call)
        console.log("Signing up with:", { email, password });
        // After successful signup, navigate to the login page
        navigate("/login");
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
                onSubmit={handleSignup}
                sx={{
                    width: 300,
                    height: 460,
                    p: 3,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "#fff",
                }}
            >
                {/* Logo and Company Name */}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        marginBottom: 3,
                    }}
                >
                    <Box
                        component="img"
                        src={brainImage}
                        alt="Cognify Logo"
                        sx={{
                            height: 60,
                            marginRight: 1,
                        }}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            color: "black",
                            marginLeft: 1,
                        }}
                    >
                        Cognify
                    </Typography>
                </Box>

                {/* Signup Form Title */}
                <Typography variant="h5" mb={2} textAlign="center">
                    Sign Up
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

                <TextField
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    edge="end"
                                >
                                    {showConfirmPassword ? (
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
                    Sign Up
                </Button>

                {/* Bottom Link to Login */}
                <Box mt={3} textAlign="center">
                    <Typography variant="body2">
                        Already have an account?{" "}
                        <Link
                            onClick={() => navigate("/login")}
                            sx={{ cursor: "pointer", color: "#1976d2" }}
                        >
                            Login here
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Signup;
