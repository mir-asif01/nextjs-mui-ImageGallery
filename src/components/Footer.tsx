"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        py: 2, // Padding top and bottom (Material UI spacing unit * 2)
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4">
          Developed by © Mir Kamrul Ahsan Asif
        </Typography>
        <Box>
          <IconButton
            color="inherit"
            aria-label="GitHub"
            href={"https://github.com/mir-asif01"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </IconButton>

          <IconButton color="inherit" aria-label="Email">
            <Mail />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
