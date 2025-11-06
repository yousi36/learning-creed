"use client";
import { Grid, Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const statsData = [
  {
    title: "Courses Offered",
    image: "/course.svg",
    number: "35,000+",
    description: "UK's largest live catalogue of funded qualifications",
  },
  {
    title: "Awarding Organisations Covered",
    image: "award.svg",
    number: "500+",
    description: "Data integrated from all regulated awarding bodies",
  },
  {
    title: "Training Providers",
    image: "/training.svg",
    number: "60+",
    description: "Strategic data across all key skills sectors",
  },
];

export default function StatSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px:{md:25},
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "start",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 10 }}
        sx={{
          maxWidth: 1300,
          px: { xs: 2, md: 4 },
        }}
      >
        {statsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={0}
              sx={{
                borderRadius: "24px",
                textAlign: "center",
                backgroundColor: "#f9fbfc",
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 3 },
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  color: "#0b0b0b",
                  mb: 3,
                }}
              >
                {item.title}
              </Typography>

              {/* Image */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Number */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: 1.1,
                  color: "#0b0b0b",
                }}
              >
                {item.number}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  mt: 2,
                  color: "#3c3c3c",
                  fontSize: "14px",
                  maxWidth: 280,
                  mx: "auto",
                  lineHeight: 1.5,
                }}
              >
                {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
