"use client";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <AppBar component="footer" position="static" sx={{ p: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">
          Developed by © Mir Kamrul Ahsan Asif
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
