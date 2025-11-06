'use client';

import { Box, Grid, Typography, Button, Paper, Chip } from '@mui/material';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from 'next/image';
import Link from 'next/link';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function HeroSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 18 },
        px: { xs: 3, md: 30 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f6fff9 100%)',
      }}
    >
      {/* ---------- Top Container ---------- */}
      <Box sx={{ textAlign: 'left', mb: 10 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#001e1d',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Your Data-Driven Partner <br /> in UK Education Management
        </Typography>
      </Box>

      {/* ---------- Bottom Container ---------- */}
      <Grid
        container
        spacing={4}
        // alignItems="center"
        justifyContent="start"
        sx={{display:"flex",
            flexDirection:"row",
            
   
        }}
      >


         <Grid item xs={12} marginInlineEnd={6} sx={{ position: 'relative'}}>
          <Paper
            elevation={3}
            sx={{
              overflow: 'hidden',
              borderRadius: 4,
              position: 'relative',
              boxShadow: '0 8px 24px rgba(0, 30, 29, 0.08)',
            }}
          >
            <Image
              src="/about-us-hero-section.svg" 
              alt="Hero image"
              width={200}
              height={450}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Paper>

          {/* Floating Chips */}
          <Chip
            icon={<AccountBalanceIcon />}
            label="Funding"
            sx={{
              position: 'absolute',
              top: 30,
              left: -50,
              backgroundColor: 'white',
              fontWeight: 500,
              boxShadow: 2,
            }}
          />
          <Chip
            icon={<SchoolIcon />}
            label="Learning"
            sx={{
              position: 'absolute',
              bottom: 30,
              right: -40,
              backgroundColor: 'white',
              fontWeight: 500,
              boxShadow: 2,
            }}
          />
        </Grid>
        {/* Left Card - Text + Button */}
        <Grid item xs={12} size={6}>
          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 30, 29, 0.08)',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(0,0,0,0.75)',
                mb: 4,
                fontSize:"1.2rem",
                lineHeight: 1.8,
              }}
            >
              We were founded to cut through the complexity of the UK education
              landscape. Our mission is to transform sprawling course, funding,
              and LARS data into a single, intuitive source of truth. We provide
              training institutes with the live intelligence and analytical tools
              needed to ensure unwavering compliance, maximise funding eligibility,
              and drive the strategic growth of your provision — saving your team
              countless hours on manual administration.
            </Typography>

            <Button
              component={Link}
              href="/get-started"
              variant="contained"
              endIcon={<ArrowCircleRightIcon />}
              sx={{
                alignSelf: 'flex-start',
                backgroundColor: '#001e1d',
                borderRadius: '9999px',
                textTransform: 'none',
                px: 4,
                py: 1.3,
                fontWeight: 600,
                '&:hover': { backgroundColor: '#00332f' },
              }}
            >
              Get started
            </Button>
          </Paper>
        </Grid>

        {/* Right Card - Image + Floating Chips */}
       
      </Grid>
    </Box>
  );
}
