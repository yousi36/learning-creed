'use client';

import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function SupportedOrganisations() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 30 },
        textAlign: { xs: 'center', md: 'left' },
        // background: 'linear-gradient(180deg, #ffffff 0%, #f6fff9 100%)',
      }}
    >
      {/* ---------- Top Container (Text) ---------- */}
      <Box sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#001e1d',
            mb: 1,
            lineHeight: 1.3,
             fontSize:"3rem",
            fontWeight:"200"
          }}
        >
          Supported
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#001e1d',
            lineHeight: 1.3,
             fontSize:"3rem",
            fontWeight:"200"
          }}
        >
          UK – Awarding Organisations
        </Typography>
      </Box>

      {/* ---------- Bottom Container (Logos Grid) ---------- */}
      <Box>
        <Grid container spacing={22}  justifyContent="start" alignItems="center">
          {/* First Row (3 images) */}
          <Grid item xs={12} md={4 }>
            <Image
              src="/pearson_btec.svg"
              alt="Pearson"
              width={180}
              height={100}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/city_guilds.svg"
              alt="City & Guilds"
              width={180}
              height={100}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/high_field.svg"
              alt="Highfield"
              width={180}
              height={100}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>

        {/* Second Row (2 images) */}
        <Grid
          container
          spacing={22}
          justifyContent="start"
          alignItems="center"
          sx={{ mt: { xs: 4, md: 6 } }}
        >
          <Grid item xs={12} md={4}>
            <Image
              src="/cim_logo.svg"
              alt="CIM"
              width={220}
              height={100}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/bcs.svg"
              alt="BCS"
              width={150}
              height={100}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
