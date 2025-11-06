"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
           background: "linear-gradient(180deg, #E5FAEE 0%, #FFFFFF 100%)",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* ---------- Left Side (Text) ---------- */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          {/* Small Badge */}
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "9999px",
              display: "inline-block",
              px: 2.5,
              py: 0.8,
              fontWeight: 600,
              fontSize: "0.85rem",
              mb: 2,
            }}
          >
            Welcome To LearningCreed
          </Typography>

          {/* Main Title */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "4rem" },
              lineHeight: 1.1,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1,
              mb: 1.5,
            }}
          >
            DISCOVER <span>📚</span>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mb: 3,
              maxWidth: 600,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Every Funded Course in the UK All in One Place
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: 550,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Access comprehensive qualification data, funding eligibility,
            awarding body information, and live analytics — empowering providers,
            employers, and learners with data-driven decisions.
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/login"
            endIcon={<ArrowCircleRightIcon />}
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              borderRadius: "9999px",
              px: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#1a1a1a", // Slightly lighter black for smooth fade effect
              },
            }}
          >
            Get started
          </Button>
        </Box>

        {/* ---------- Right Side (Image) ---------- */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            src="/hero-image.png" // Replace with your actual image path
            alt="Student celebrating learning success"
            width={520}
            height={500}
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Container>

      {/* ---------- Soft Fade at Bottom ---------- */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
        }}
      />
    </Box>
  );
}

