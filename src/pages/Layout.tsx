import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};
