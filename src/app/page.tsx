"use client";
import { Box } from "@mui/material";
import Header from "./components/header";
import SideNavbar from "./components/sideNavbar";
import { useState } from "react";
import SubPages from "./components/subPages";
import MainBody from "./components/mainBody";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <SideNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box sx={{ flex: 1, overflowY: "auto", background: "#F2F2F2" }}>
          <SubPages />
          <MainBody />
        </Box>
      </Box>
    </Box>
  );
}
