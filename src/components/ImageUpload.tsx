"use client";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Container, DeleteIcon, UploadCloudIcon } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import Image from "next/image";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ImageUpload() {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const imageFormData = new FormData();

  function handleImageInput(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const images: File[] = Array.from(files);
      setImages((prev) => [...prev, ...images]);
      const newPreviews: string[] = [];
      for (const file of images) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newPreviews.push(e.target.result as string);
            setPreviews((prevPreviews) => [
              ...prevPreviews,
              e.target?.result as string,
            ]);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  images.forEach((img) => imageFormData.append("images", img));

  async function uploadToCloudinary() {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: imageFormData,
      }).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
    setPreviews((prevPreviews) =>
      prevPreviews.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<UploadCloudIcon />}
      >
        Select Images
        <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImageInput}
          multiple
        />
      </Button>
      <Button onClick={() => uploadToCloudinary()}>Upload</Button>
      <Typography variant="h5">selected images</Typography>
      {previews?.length > 0 ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {previews.map((previewUrl, index) => (
            <ListItem
              key={index}
              sx={{
                width: 160,
                height: 160,
                border: "1px solid #ccc",
                borderRadius: 1,
              }}
            >
              <ListItemAvatar
                sx={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image
                  src={previewUrl}
                  alt={`Preview ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: 1 }}
                />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemoveImage(index)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2">No images selected yet.</Typography>
      )}
    </Box>
  );
}
