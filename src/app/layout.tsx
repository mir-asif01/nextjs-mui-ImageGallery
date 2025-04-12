import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pichouse - Nextjs-Typescript and MaterialUI project",
  description:
    "Simple image gallery app built with NextJs-Typescript, Material UI, Cloudinary and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-[100vh]`}
      >
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        > */}
        <Box component="header">
          <Header />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
        <Box component="footer">
          <Footer />
        </Box>
        {/* </Box> */}
      </body>
    </html>
  );
}
