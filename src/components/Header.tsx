import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <Typography
          fontSize={{ xs: "20px", md: "30px", lg: "40px" }}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Pichouse
        </Typography>
        <Link href={"/"} passHref>
          <Button color="inherit">Upload</Button>
        </Link>
        <Link href={"/gallery"} passHref>
          <Button color="inherit">Gallery</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
