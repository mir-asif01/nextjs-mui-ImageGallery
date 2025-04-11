"use client";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import { DeleteIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import ImagePreviewModal from "./ui/ImagePreviewModal";

interface IImage {
  id: string;
  public_id: string;
  url: string;
  tags: string[];
}

const Images = ({ images }: { images: IImage[] }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageSelect = (url: string) => {
    setSelectedImage(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const handleDelete = () => {};

  return (
    <Grid container spacing={2}>
      {selectedImage && (
        <ImagePreviewModal
          url={selectedImage}
          open={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      {images?.map((img) => (
        <Grid key={img?.id} size={4}>
          <Card sx={{}}>
            <CardMedia
              component="img"
              height="200"
              image={img.url}
              // alt={img.altText || "Image"}
            />
            <CardActions
              sx={{
                justifyContent: "space-between",
              }}
            >
              <IconButton aria-label="view" onClick={() => {}}>
                <EyeIcon onClick={() => handleImageSelect(img?.url)} />
              </IconButton>
              <Button
                size="small"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
