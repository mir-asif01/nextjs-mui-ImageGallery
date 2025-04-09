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
        height: 500,
      }}
    >
      <ImageUpload />
    </Box>
  );
}
