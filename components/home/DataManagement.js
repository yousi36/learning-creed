"use client";
import { Box, Container, Typography, Button, Grid, Avatar, Paper } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export default function DataManagementSection() {
  return (
    <Box
      component="section"
      ml={2}
      mr={2}
      sx={{
        bgcolor: "#042A2B",
        color: "white",
        py: { xs: 8, md: 12 },
        borderRadius: "40px",
        height:"130vh",
      }}
    >
      <Container>
        {/* ===================== SECTION 1 ===================== */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 10 }}
        >
          {/* Left column - Heading */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              Manage Your Learning <br /> Data Anywhere
            </Typography>
          </Grid>

          {/* Right column - Text + Button */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              color="rgba(255,255,255,0.8)"
              sx={{
                maxWidth: 500,
                mb: 4,
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Access the Learning Cloud Portal seamlessly from any device.
              Whether you’re a learner researching career-focused qualifications
              or a provider checking funding eligibility, you can manage,
              monitor, and compare courses with ease.
            </Typography>

            <Button
              variant="contained"
              color="inherit"
              component={NextLink}
              href="/contact"
              sx={{
                borderRadius: 5,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                color: "black",
                bgcolor: "white",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.8)",
                },
              }}
            >
              Contact Us →
            </Button>
          </Grid>
        </Grid>

        {/* ===================== SECTION 2 ===================== */}
        <Grid container rowSpacing={0} alignItems="start" mb={-50} sx={{width:"75vw",height:"100vh"}} >
          {/* Left Column — two stacked cards */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={4}>
              {/* Top Card - Testimonial */}
              <Grid item>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#2A6F6C",
                    color: "white",
                    borderRadius: 4,
                    p: 4,
                    height: "100%",
                    width:"40%"
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Avatar
                      src="/girl-avatar.jpg"
                      alt="Sarah Rose"
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        lineHeight: 1.6,
                      }}
                    >
                      “The platform has completely changed how we research
                      funding eligibility. Everything is in one place — fast,
                      accurate, and reliable.”
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      fontSize={20}
                      sx={{ mt: 1 }}
                    >
                      Sarah Rose
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Bottom Card - 90% Info */}
              <Grid item>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#E0F2F1",
                    color: "#004D40",
                    borderRadius: 4,
                    p: 4,
                    width:"40%",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Image
                      src="/percentage.svg"
                      alt="90 percent"
                      width={120}
                      height={140}
                      style={{
                        marginBottom: "16px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="body2" color="#242323ff" fontSize={17}>
                      of providers save hours of manual research weekly using
                      our automated data tools.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column — large rounded gradient image container */}
          <Grid item xs={12} md={6} ml={-75} sx={{width:"50%", height:"100vh"}}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 400, md: 520 },
                borderRadius: "32px",
                overflow: "hidden",
                background: "linear-gradient(145deg, #1E4E4A 0%, #3A7D7C 100%)",
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Image
                src="/technology.svg" // replace with your image
                alt="Data Analytics Visualization"
                sx={{border:"1px solid black"}}
                fill
                style={{
                  objectFit: "cover",

                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
