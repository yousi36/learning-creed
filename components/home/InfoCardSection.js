"use client";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

export default function InfoCardSection({
  title,
  description,
  imageSrc,
  imageFirst = true,
  bgColor = "#f6f6f6",
}) {
    console.log(imageFirst);
  return (
    <Box
      component="section"
      mt={4}
      sx={{
        bgcolor: bgColor,
        py: { xs: 2, md: 10 },
        borderRadius: "40px",
        m:"80px 0px"
      }}
    >
      <Container sx={{width:"100vw",}}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 6,
            p: { xs: 4, md: 1 },
            ml:"-px",
            bgcolor: bgColor,
          }}
        >
          <Grid
            container
            horizontalSpacing={1}
            ml={-20}
            flexDirection={imageFirst?"row":"row-reverse"}
          >
            {/* Image Card */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  width={500}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                  }}
                  priority
                />
              </Paper>
            </Grid>

            {/* Text Card */}
        <Grid item xs={12} md={6} ml={10} mr={-10} width={500} >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: "1.8rem", md: "3rem" },
                    mb: 2,
                    color: "#111827",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.2rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                    maxWidth: 600,
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
