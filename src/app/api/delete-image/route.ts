import cloudinary from "@/utils/cloudinaryConfig";
import supabaseClient from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id, public_id } = await req.json();

    if (!id || !public_id) {
      return NextResponse.json(
        { message: "id/public_id is missing", success: false },
        { status: 400 }
      );
    }

    //delete from supabase
    const { error: supabaseError } = await supabaseClient
      .from("images")
      .delete()
      .eq("id", id);
    if (supabaseError) {
      return NextResponse.json(
        { message: "error while deleting data from supabase", success: false },
        { status: 400 }
      );
    }

    // delete from cloudinary
    const { error: cloudinaryError } = await cloudinary.uploader.destroy(
      public_id
    );
    if (cloudinaryError) {
      return NextResponse.json(
        {
          message: "error while deleting image from cloudinary",
          success: false,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "successfully deleted",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error) throw new Error("Error while deleting images");
  }
}
