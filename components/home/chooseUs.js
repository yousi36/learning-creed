"use client";

import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <LockOutlinedIcon sx={{ color: "#EB5757" }} />,
      bgColor: "#FEECEC",
      title: "Comprehensive Coverage",
      desc: "Access 35,000+ qualifications and apprenticeships.",
    },
    {
      icon: <AccessTimeIcon sx={{ color: "#2F80ED" }} />,
      bgColor: "#EBF3FF",
      title: "Time Savings",
      desc: "Reduce research time on funding and eligibility checks.",
    },
    {
      icon: <CheckCircleOutlineIcon sx={{ color: "#27AE60" }} />,
      bgColor: "#E9F9EF",
      title: "Ease of Use",
      desc: "Simple filters, dynamic dashboards, and intuitive analytics tools.",
    },
    {
      icon: <SmartphoneOutlinedIcon sx={{ color: "#828282" }} />,
      bgColor: "#F4F4F4",
      title: "Scalable Access",
      desc: "Designed for providers, employers, and education consultants.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#F6F9F9",
        borderRadius: { xs: "0", md: "32px" },
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* ---------- Left Side (Heading) ---------- */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.3,
                color: "text.primary",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Why Choose Us — <br /> Empowering Learning for All
            </Typography>
          </Grid>

          {/* ---------- Right Side (Features List) ---------- */}
          <Grid item xs={12} md={6}>
            {features.map((feature, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    py: 2,
                  }}
                >
                  {/* Icon Box */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: feature.bgColor,
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  {/* Text Content */}
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {feature.desc}
                    </Typography>
                  </Box>
                </Box>

                {/* Divider except last */}
                {index < features.length - 1 && (
                  <Divider sx={{ borderColor: "rgba(0,0,0,0.1)" }} />
                )}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
