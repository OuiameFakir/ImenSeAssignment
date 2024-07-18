"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import LanguageDropdown from "./lngDropdown";
import UserDropdown from "./userDropdown";
interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "3.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "1.12rem",
        background: "white",
        boxShadow: " 0px 0.5px 1px 0px rgba(0, 0, 0, 0.15)",
        zIndex: 10,
      }}
    >
      {isSidebarOpen ? (
        <Box></Box>
      ) : (
        // Toggle and Title
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            disableRipple
            disableFocusRipple
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Image
              src={"/images/toggle.svg"}
              alt="Toggle"
              width={17}
              height={12}
            />
          </IconButton>
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.875rem",
              marginLeft: "0.56rem",
            }}
          >
            Overview
          </Typography>
        </Box>
      )}

      {/* Right Section */}

      <Box
        sx={{
          width: "21.125rem",
          height: "2rem",
          flexShrink: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* element A */}
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: " 0.125rem",
          }}
        >
          <Typography
            sx={{
              color: "#B4B4B4",
              fontFamily: "Roboto",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontHeight: 500,
              lineHeight: "1.875rem",
            }}
          >
            A
          </Typography>
          <Image src={"/images/size.svg"} alt={"size"} width={7} height={14} />
        </Box>
        {/* vector element */}
        <Image
          src={"/images/vector.svg"}
          alt={"vector"}
          width={15}
          height={18.281}
        />
        {/* notification icon element */}
        <Image
          src={"/images/notification.svg"}
          alt={"notification"}
          width={14}
          height={14.933}
        />
        {/* Language */}
        <LanguageDropdown />
        {/* User */}
        <UserDropdown />
      </Box>
    </Box>
  );
};

export default Header;
