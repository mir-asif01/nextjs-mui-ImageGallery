"use client";
import Images from "@/components/ImageList";
import supabaseClient from "@/utils/supabaseClient";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

interface IImage {
  id: string;
  public_id: string;
  url: string;
  tags: string[];
}
export default function page() {
  const [images, setImages] = useState<IImage[] | null>(null);
  useEffect(() => {
    async function fetchImages() {
      try {
        const { data } = await supabaseClient
          .from("images")
          .select("id,public_id,url,tags");
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        p: 2,
      }}
    >
      <Images images={images!} />
    </Box>
  );
}
