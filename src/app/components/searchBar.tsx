import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import Image from "next/image";

const SearchBar = () => {
  return (
    <Box
      sx={{
        width: "22.8125rem",
        display: "flex",
        paddingRight: "3.5625rem",
        gap: "0.6875rem",
        borderRadius: "0.125rem",
        border: "1px solid #D8D8D8",
        background: "#FFF",
        alignItems: "center",
      }}
    >
      <IconButton>
        <Image
          src={"/images/searchIcon.svg"}
          alt={"searchIcon"}
          width={13}
          height={13}
        />
      </IconButton>
      <InputBase
        placeholder="Search workers ..."
        sx={{
          width: "100%",
          "&::placeholder": {
            color: "#C8C8C8",
            fontFamily: "Roboto",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1.875rem",
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
