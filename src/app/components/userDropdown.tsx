"use client";
import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  ListItemIcon,
  Divider,
} from "@mui/material";
import Image from "next/image";

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disableRipple
        disableFocusRipple
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "8.75rem",
          height: "2rem",
        }}
      >
        <Image src={"/images/Ellipse 1.svg"} alt={""} width={31} height={31} />
        <Typography
          sx={{
            color: "#7A7A7A",
            fontFamily: "Roboto",
            fontSize: " 0.8125rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1.875rem",
          }}
        >
          BESIX Group
        </Typography>
        <Image src={"/images/Arrow 2.svg"} alt={""} width={10} height={10} />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box sx={{ padding: 2 }}>
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            BESIX Group
          </Typography>
          <Typography
            sx={{
              color: "#797979",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            besix.group@besix.be
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {" "}
            <Image
              src={"/images/seetingsIcon.svg"}
              alt={""}
              width={16}
              height={16}
            />
          </ListItemIcon>
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "0.8125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Profile settings
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {" "}
            <Image
              src={"/images/policies.svg"}
              alt={""}
              width={16}
              height={20}
            />
          </ListItemIcon>
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "0.8125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Our policies
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {" "}
            <Image
              src={"/images/logoutIcon.svg"}
              alt={""}
              width={16}
              height={20}
            />
          </ListItemIcon>
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "0.8125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Log out
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserDropdown;
