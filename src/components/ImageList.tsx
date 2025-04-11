"use client";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteIcon, EyeIcon } from "lucide-react";

interface IImage {
  id: string;
  public_id: string;
  url: string;
  tags: string[];
}

const Images = ({ images }: { images: IImage[] }) => {
  return (
    <Grid container spacing={2}>
      {images?.map((img) => (
        <Grid size={6}>
          <Card>
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
                <EyeIcon />
              </IconButton>
              <Button
                size="small"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => {}}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Typography>Saved Images</Typography>
    </Grid>
  );
};

export default Images;
