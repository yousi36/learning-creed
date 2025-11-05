"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Paper,
  Slide,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Course Explorer", href: "/courses" },
    { name: "Careers", href: "/careers" },
    { name: "Glossary", href: "/glossary" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          borderRadius: "9999px",
          width: isMobile ? "90%" : "fit-content",
          left: 0,
          right: 0,
          mx: "auto",
          mt: 2,
          py: 0,
          boxShadow: 3,
          display: "flex",
          justifyContent: "center",
          zIndex: 1300,
        }}
      >
        <Toolbar
          disableGutters
          sx={{ px: 2, justifyContent: "space-between", minHeight: 56 }}
        >
          {/* Logo */}
          <IconButton sx={{ ml: "-5",color: "white" }}>
            <MenuBookIcon fontSize="medium" />
          </IconButton>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: pathname === item.href ? "red" : "white",
                      "&:hover": { color: "red",textDecorationLine:"none" },
                      textDecoration: "none",
                      transition: "color 0.2s ease-in-out",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
              <Button
                component={Link}
                href="/login"
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 0.7,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                    boxShadow: "none",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <IconButton sx={{ color: "orange" }} onClick={() => setOpen(!open)}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE SLIDE-DOWN MODAL */}
      {isMobile && (
        <Slide
          direction="down"
          in={open}
          mountOnEnter
          unmountOnExit
          timeout={{
            enter: 500, // 500ms slide-in duration
            exit: 400, // 400ms slide-out duration
          }}
          easing={{
            enter: "cubic-bezier(0.16, 1, 0.3, 1)", // smooth ease-out
            exit: "cubic-bezier(0.7, 0, 0.84, 0)", // smooth ease-in
          }}
        >
          <Paper
            elevation={5}
            sx={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              mx: "auto",
              width: "90%",
              backgroundColor: "black",
              color: "white",
              borderRadius: "30px",
              overflow: "hidden",
              zIndex: 1200,
              boxShadow: 5,
            }}
          >
            {/* Navigation Links */}
            <Box
              sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  onClick={() => setOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      py: 0.8,
                      fontWeight: pathname === item.href ? 700 : 500,
                      color: pathname === item.href ? "orange" : "white",
                      "&:hover": { color: "orange" },
                      transition: "color 0.2s ease-in-out",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
               <Button
                component={Link}
                href="/login"
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  fontWeight: 600,
                  m:"0px auto",
                  px: 3,
                  py: 0.7,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                    boxShadow: "none",
                  },
                }}
              >
                Login
              </Button>

            </Box>
          </Paper>
        </Slide>
      )}
    </>
  );
}
