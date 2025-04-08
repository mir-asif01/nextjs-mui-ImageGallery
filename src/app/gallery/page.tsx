import Images from "@/components/ImageList";
import { Box } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
      }}
    >
      <Images />
    </Box>
  );
}
