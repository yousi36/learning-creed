'use client';

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Box
      sx={{
        minHeight: '90vh',
        bgcolor: '#fafafa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        mt:"65px"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 700,
          width: '100%',
          borderRadius: '20px',
          p: { xs: 3, sm: 5 },
          textAlign: 'center',
        }}
      >
        {/* ===== Text Section ===== */}
        <Stack spacing={1.5} alignItems="center" mb={3}>
          <Image
            src="/logo.svg" // replace with your logo file in /public
            alt="Learning Creed Logo"
            width={45}
            height={45}
          />
          <Typography variant="h6" fontWeight={700}>
            Learning Creed
          </Typography>
          <Typography variant="h5" fontWeight={600} mt={1}>
            Welcome to Learning Creed
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to your account to continue
          </Typography>
        </Stack>

        {/* ===== Form Section ===== */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            {/* Email Field */}
            <Box textAlign="left">
              <Typography variant="body1" fontWeight={500} mb={0.5} fontSize={14}>
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
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover fieldset': { borderColor: '#002B29' },
                    '&.Mui-focused fieldset': { borderColor: '#002B29' },
                  },
                }}
              />
            </Box>

            {/* Password Field */}
            <Box textAlign="left">
              <Typography variant="body1" fontWeight={500} mb={0.5} fontSize={14}>
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover fieldset': { borderColor: '#002B29' },
                    '&.Mui-focused fieldset': { borderColor: '#002B29' },
                  },
                }}
              />
            </Box>

            {/* Remember Me + Forgot Password */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: -1 }}
            >
              <FormControlLabel
                control={<Checkbox color="black" />}
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <Link
                href="/forgot"
                underline="none"
                sx={{
                  color: 'error.main',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            {/* Sign In Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              endIcon={<ArrowCircleRightIcon sx={{fontSize:"30px"}} />}
              sx={{
                mt: 1,
                backgroundColor: '#000',
                borderRadius: '9999px',
                py: 1.4,
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#002B29',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>

        {/* ===== Footer ===== */}
        <Typography variant="body2" mt={3}>
          Don’t have an account?{' '}
          <Link href="/contact" passHref>
            <MuiLink
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Contact Us
            </MuiLink>
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
