"use client";

import { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Email is not valid";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Message sent successfully!");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "#F9F9F9",
                minHeight: "100vh",
                py: 8,
                display: "flex",
                alignItems: "center",
                mt: -8,
                mb: -20
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, width: "100%" }}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: "100%" }}
                >
                    {/* Left Column: Text Section */}
                    <Grid item xs={12} md={6} sx={{ width: "50%", ml: -6, height: "100%" }}>
                        <Box>
                            <Typography
                                variant="h3"
                                fontWeight={700}
                                sx={{ mb: 3, lineHeight: 1.2 }}
                            >
                                We’re Here to Help You Learn,
                                <br />
                                Grow, and Connect
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                At Learning Creed, we’re passionate about simplifying access to
                                funded courses, qualification data, and learning insights across
                                the UK.
                            </Typography>
                            <Typography color="text.secondary">
                                Whether you’re a learner, training provider, or employer, our
                                team is ready to support you every step of the way.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Column: Form Section */}
                    <Grid item xs={12} md={6} sx={{  width: "50%" }}>
                        <Paper
                            elevation={1}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                backgroundColor: "#fff",
                            }}
                        >
                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={6}>
                                       <Typography
                                            component="label"
                                            sx={{
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            First Name
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'red',
                                                    fontWeight: 'bold',
                                                    ml: 0.5, 
                                                }}
                                            >
                                                *
                                            </Typography>
                                        </Typography>
                                        <TextField
                                            placeholder="Enter your first name"
                                            value={formData.firstName}
                                            onChange={(e) =>
                                                setFormData({ ...formData, firstName: e.target.value })
                                            }
                                            error={!!errors.firstName}
                                            helperText={errors.firstName}
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "15px",
                                                    backgroundColor: "#F2F2F2",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#ddd",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                       <Typography
                                            component="label"
                                            sx={{
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            Last Name
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'red',
                                                    fontWeight: 'bold',
                                                    ml: 0.5, 
                                                }}
                                            >
                                                *
                                            </Typography>
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter your last name"
                                            value={formData.lastName}
                                            onChange={(e) =>
                                                setFormData({ ...formData, lastName: e.target.value })
                                            }
                                            error={!!errors.lastName}
                                            helperText={errors.lastName}
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "12px",
                                                    backgroundColor: "#F2F2F2",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#ddd",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} >
                                        <Typography
                                            component="label"
                                            sx={{
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            Email
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'red',
                                                    fontWeight: 'bold',
                                                    ml: 0.5, 
                                                }}
                                            >
                                                *
                                            </Typography>
                                        </Typography>
                                        <TextField
                                            placeholder="Enter your email address"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            error={!!errors.email}
                                            helperText={errors.email}
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "12px",
                                                    backgroundColor: "#F2F2F2",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#ddd",
                                                },
                                                width: "100%",
                                                border: "1px solid red"
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography
                                            component="label"
                                            sx={{
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            How May We Help You?
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'red',
                                                    fontWeight: 'bold',
                                                    ml: 0.5, 
                                                }}
                                            >
                                                *
                                            </Typography>
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={5}
                                            placeholder="How may we help you"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            error={!!errors.message}
                                            helperText={errors.message}
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "12px",
                                                    backgroundColor: "#F2F2F2",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#ddd",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ textAlign: "right", mt: 1 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#001E1D",
                                                borderRadius: "20px",
                                                px: 5,
                                                py: 1.3,
                                                textTransform: "none",
                                                fontSize: "16px",
                                                "&:hover": {
                                                    backgroundColor: "#00302d",
                                                },
                                            }}
                                        >
                                            Send Message →
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}


