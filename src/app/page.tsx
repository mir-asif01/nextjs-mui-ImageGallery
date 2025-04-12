import ImageUpload from "@/components/ImageUpload";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
      my={{ xs: "30px", md: "60px", lg: "90px" }}
      // height={{ xs: 300, md: 500, lg: "100vh" }}
    >
      <ImageUpload />
    </Box>
  );
}
