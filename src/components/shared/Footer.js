import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Blogs",
      pathname: "/blogs",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box className='bg-slate-400 px-2 py-10'>
      <Container>
        <Box className='w-full text-center space-x-4'>
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className='text-white'>
                {item.route}
              </Button>
            </Link>
          ))}
        </Box>
        <Box
          className='w-full text-center my-5 space-x-4'
          sx={{
            "& svg": {
              color: "white",
            },
          }}>
            <IconButton>
              <Facebook></Facebook>
            </IconButton>
            <IconButton>
              <Twitter></Twitter>
            </IconButton>
            <IconButton>
              <GitHub></GitHub>
            </IconButton>
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
            @2023 My portfolio website.Designed by Fazlul Karim.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
