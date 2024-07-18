"use client";
import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  ListItemIcon,
} from "@mui/material";
import Image from "next/image";
import english from "@/../../public/images/english.svg";

const languages = [
  { code: "EN", name: "English", flag: "/images/english.svg" },
  { code: "FR", name: "Français", flag: "/images/france.svg" },
  { code: "NL", name: "Nederlands", flag: "/images/nederlands.svg" },
  { code: "ES", name: "Español", flag: "/images/spain.svg" },
  { code: "DE", name: "Deutsch", flag: "/images/germany.svg" },
];

const LanguageDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disableRipple
        disableFocusRipple
      >
        <Image src={english.src} alt={"english"} width={19} height={19} />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={handleClose}>
            <ListItemIcon>
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
            </ListItemIcon>
            <Typography
              variant="inherit"
              sx={{
                color: lang.code === "EN" ? "#313131" : "#ADADAD",
                fontFamily: "Lato",
                fontSize: "0.75rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >{`${lang.name} (${lang.code})`}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageDropdown;
