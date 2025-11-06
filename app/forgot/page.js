"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fafafa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          maxWidth: 700,
          width: "100%",
          borderRadius: "16px",
          p: { xs: 3, sm: 5 },
          textAlign: "center",
        }}
      >
        {/* ===== Header Section ===== */}
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
          mb={3}
        >
          <Image
            src="/logo.svg" // replace with your actual logo file
            alt="Learning Creed Logo"
            width={45}
            height={45}
          />
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ color: "text.primary" }}
          >
            Learning Creed
          </Typography>
        </Stack>

        {/* ===== Title Section ===== */}
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: "#002B29",
            mb: 0.5,
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
          }}
        >
          Reset Password
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Confirm your email to receive link
        </Typography>

        {/* ===== Form Section ===== */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {/* Email Field */}
            <Box textAlign="left">
              <Typography variant="body1" fontWeight={500} mb={0.5}>
                Email Address
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "&:hover fieldset": { borderColor: "#002B29" },
                    "&.Mui-focused fieldset": { borderColor: "#002B29" },
                  },
                }}
              />
            </Box>

            {/* Reset Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              endIcon={<ArrowCircleRightIcon />}
              sx={{
                backgroundColor: "#002B29",
                borderRadius: "9999px",
                py: 1.4,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#004743",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Reset
            </Button>
          </Stack>
        </Box>

        {/* ===== Footer ===== */}
        <Typography variant="body2" mt={3}>
          Back to{" "}
          <Link href="/login" passHref>
            <MuiLink
              sx={{
                fontWeight: 700,
                color: "text.primary",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Login
            </MuiLink>
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
