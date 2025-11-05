"use client";

import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import FooterCard from "./FooterCard";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Course Explorer", href: "/courses" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Glossary", href: "/glossary" },
  ];

  const legalLinks = [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        mt: 6,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and Description */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Image src="/logo.png" alt="Learning Creed Logo" width={32} height={32} />
              <Typography variant="h6" fontWeight="bold">
                LearningCreed
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Learning Creed connects learners, providers, and employers through trusted,
              funded UK qualifications.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterCard title="Quick Links" links={quickLinks} />
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterCard title="Legal" links={legalLinks} />
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Social Media
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton color="inherit" href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Learning Creed. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

/* Reusable Footer Card Component */
