"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export default function HeroSection() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                py: { xs: 6, md: 10, },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 8 },
                }}
            >
                {/* Left Side: Text Section */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{
                        backgroundColor: "black",   
                        color: "white",            
                        borderRadius: 5,            
                        px: 4,                  
                        py: 0,                      
                        display: "inline-block",    
                    }} paragraph>
                        Welcome To LearningCreed
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
             
                        sx={{ mb: 3, maxWidth: 500 }}
                    >
                        At Learning Creed, we connect learners, educators, and employers through trusted and
                        accredited UK qualifications that shape brighter futures.
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        component={NextLink}
                        href="/courses"
                        sx={{ borderRadius: 2, px: 4, py: 1.2 }}
                    >
                        Explore Courses
                    </Button>
                </Box>

                {/* Right Side: Image Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        src="/hero-image.png" // <-- replace with your actual image in /public
                        alt="Learning Hero"
                        width={500}
                        height={400}
                        
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "16px",
                        }}
                        priority
                    />
                </Box>
            </Container>
        </Box>
    );
}
