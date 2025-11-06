import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const LearningJourneySection = ({ imageSrc }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height:"80vh",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      {/* First container — heading */}
      <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 6,ml:36 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#0b0b0b",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Begin Your Learning <br /> Journey — Today
        </Typography>
      </Box>

      {/* Second container — grid with image and text */}
      <Grid
        container
        alignItems="center"
        justifyContent="right"
        spacing={4}
      >
        {/* Left column — Image */}
        <Grid item xs={12} md={6} mt={-5} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={imageSrc}
            alt="Student"
            sx={{
              maxWidth: "100%",
              height: "60vh",
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* Right column — Text + Button */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              mb: 3,
              fontSize: "1.1rem",
              color: "#1a1a1a",
              lineHeight: 1.6,
              maxWidth: "60%",
            }}
          >
            Explore funded UK courses and start your journey
            toward recognised qualifications today.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowCircleRightIcon />}
            sx={{
              backgroundColor: "#002B29",
              borderRadius: "50px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#014f48",
              },
            }}
          >
            Get started
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LearningJourneySection;
