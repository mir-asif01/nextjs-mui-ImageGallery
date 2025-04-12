"use client";
import { Button, Card, CardActions, CardMedia, Grid } from "@mui/material";
import { DeleteIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import ImagePreviewModal from "./ui/ImagePreviewModal";
import DeleteConfirmationModal from "./ui/ConfirmDeleteModal";

interface IImage {
  id: string;
  public_id: string;
  url: string;
  tags: string[];
}

interface ImagesComponentProps {
  images: IImage[];
}

const Images: React.FC<ImagesComponentProps> = ({ images }) => {
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

  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<{
    id: string;
    public_id: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [deletingResult, setDeletingResult] = useState<string>("");

  const handleOpenConfirmationModal = (id: string, public_id: string) => {
    setImageToDelete({ id, public_id });
    setOpenDeleteConfirmModal(true);
    setDeletingResult("");
  };

  const handleClose = () => {
    setImageToDelete(null);
    setOpenDeleteConfirmModal(false);
    setDeletingResult("");
  };
  // console.log(confirmDelete);

  //image delete function
  const handleDelete = async () => {
    setLoading(true);
    if (imageToDelete != null) {
      try {
        const res = await fetch("/api/delete-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: imageToDelete.id,
            public_id: imageToDelete.public_id,
          }),
        });
        const response = await res.json();
        if (response?.success) {
          setDeletingResult("Successfully Deleted");
          setLoading(false);
          setTimeout(() => {
            handleClose();
          }, 3000);
        }
        console.log(response);
      } catch (error) {
        setDeletingResult("Failed to delete, try again!");
        console.log(error);
      }
    }
  };

  return (
    <Grid container spacing={2}>
      {selectedImage && (
        <ImagePreviewModal
          url={selectedImage}
          open={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      {openDeleteConfirmModal && (
        <DeleteConfirmationModal
          openDeleteConfirmModal={openDeleteConfirmModal}
          handleDelete={handleDelete}
          handleClose={handleClose}
          loading={loading}
          deletingResult={deletingResult}
        />
      )}
      {images?.map((img) => (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={img?.id} sx={{}}>
          <Card sx={{}}>
            <CardMedia
              component="img"
              height="100"
              image={img.url}
              // alt={img.altText || "Image"}
            />
            <CardActions
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Button
                size="small"
                color="primary"
                startIcon={<EyeIcon />}
                onClick={() => handleImageSelect(img?.url)}
              >
                View
              </Button>
              <Button
                size="small"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() =>
                  handleOpenConfirmationModal(img?.id, img?.public_id)
                }
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
