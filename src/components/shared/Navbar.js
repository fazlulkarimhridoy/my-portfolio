"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/mylogo.png";
import Link from "next/link";
import { IconButton, Stack } from "@mui/material";
import { Facebook, GitHub, Twitter } from "@mui/icons-material";

const Navbar = () => {
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
    <AppBar position='static' className='bg-slate-400'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Image src={logo} width='150' height='150' alt='logo' />
          <Box className='w-full text-center space-x-4'>
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className='text-white hover:bg-sky-500 rounded-md'>
                  {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack
              direction='row'
              spacing={2}
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
