"use client";
import Images from "@/components/ImageList";
import supabaseClient from "@/utils/supabaseClient";
import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

interface IImage {
  id: string;
  public_id: string;
  url: string;
  tags: string[];
}
export default function Page() {
  const [images, setImages] = useState<IImage[] | null>([]);
  const ITEMS_PER_PAGE: number = 3;
  let disable_next = false;
  if (images?.length == 0) {
    disable_next = true;
  }

  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    async function fetchImages() {
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE - 1;
      try {
        const { data } = await supabaseClient
          .from("images")
          .select("id,public_id,url,tags")
          .range(start, end);
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, [currentPage]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Images images={images!} />
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "200px",
        }}
      >
        <Button
          disabled={currentPage <= 1}
          variant="contained"
          color="primary"
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button sx={{ p: "2px", borderRadius: "50%" }}>{currentPage}</Button>
        <Button
          disabled={disable_next}
          variant="contained"
          color="primary"
          onClick={() => {
            if (disable_next) return;
            else setCurrentPage((prev) => prev + 1);
          }}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
}
