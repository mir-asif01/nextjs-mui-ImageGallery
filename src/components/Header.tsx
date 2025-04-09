import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
