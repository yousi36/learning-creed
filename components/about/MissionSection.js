"use client";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const MissionSection = ({
  image,
  title,
  description,
  cards,
  reverse = false, // if true → image on right
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f8fafb",
        borderRadius: "24px",
        px: { xs: 2, md: 30 },
      }}
    >
      <Grid
        container
        spacing={6}
        direction={reverse ? "row-reverse" : "row"}
        alignItems="start"
      >
        {/* IMAGE COLUMN */}
        <Grid item xs={12} size={5}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 300, md: 800 },
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </Box>
        </Grid>

        {/* TEXT + CARDS COLUMN */}
        <Grid item xs={12} size={6} >
          <Box>
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#0b0b0b",
                mb: 2,
                fontSize: { xs: "28px", md: "36px" },
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#2b2b2b",
                fontSize: "20px",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              {description}
            </Typography>

            {/* Cards Grid */}
            <Grid container spacing={3}>
              {cards.map((card, index) => (
                <Grid item xs={12} size={6} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      textAlign: "center",
                      p: 3,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      height: "100%",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          backgroundColor: "#fff1ed",
                          borderRadius: "12px",
                          width: 60,
                          height: 60,
                          mx: "auto",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={28}
                          height={28}
                        />
                      </Box>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          fontSize:"1.5rem",
                          mb: 1,
                          color: "#0b0b0b",
                        }}
                      >
                        {card.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#3c3c3c",
                          lineHeight: 1.5,
                          fontWeight: 500,
                          fontSize:"1.rem",
                        }}
                      >
                        {card.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionSection;
