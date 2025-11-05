'use client';

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box, IconButton, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Course Explorer', href: '/courses' },
    { name: 'Careers', href: '/careers' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'black',
        borderRadius: '9999px',
        width: 'fit-content',
        mx: 'auto',
        mt: 2,
        px: 2,
        py:-1,
        mr:62,
        boxShadow: 3,
      }}
    >
      <Toolbar disableGutters sx={{ px: 2 }}>
        {/* Left - Logo */}
        <IconButton sx={{ color: 'white', mr: 2 }}>
          <MenuBookIcon fontSize="medium" />
        </IconButton>

        {/* Middle - Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: pathname === item.href ? 'red' : 'white',
                  '&:hover': { color: 'red' },
                  textDecoration: 'none',
                  transition: 'color 0.2s ease-in-out',
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ ml: 3 }}>
          <Button
            component={Link}
            href="/login"
            variant="contained"
            sx={{
              borderRadius: '9999px',
              backgroundColor: 'white',
              color: 'black',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              py: 0.7,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#f2f2f2',
                boxShadow: 'none',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
