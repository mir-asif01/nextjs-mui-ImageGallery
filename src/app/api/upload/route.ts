import { rejects } from "assert";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { resolve } from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const imageFiles = formData.getAll("images") as File[];

    if (!imageFiles || imageFiles.length === 0) {
      return NextResponse.json(
        { message: "No image file found!" },
        { status: 400 }
      );
    }
    const CloudinaryUploadPromises = imageFiles.map(async (img) => {
      const buffer = await img.arrayBuffer();
      const bytes = new Uint8Array(buffer);

      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "image",
              folder: "nextjs-gallery",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(Buffer.from(bytes));
      });
    });

    const res = await Promise.all(CloudinaryUploadPromises);
    return NextResponse.json(
      { success: true, message: "Successfully Uploaded", data: res },
      { status: 200 }
    );
  } catch (error: any) {
    throw new Error(error);
  }
}
