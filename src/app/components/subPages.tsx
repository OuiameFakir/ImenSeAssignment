import { Box, Typography } from "@mui/material";
import React from "react";
import { SitesTypography } from "./subPages.style";

function SubPages() {
  const siteNames = ["Site 1", "Site 2", "Site 3", "Site 4"];
  return (
    <Box
      sx={{
        display: "flex",
        paddingRight: " 9.75rem",
        alignItems: "center",
        gap: "1.4375rem",
        borderBottom: "1px solid #D7D7D7",
      }}
    >
      <Box
        sx={{
          width: "5.4375rem",
          height: "2.25rem",
          textAlign: "center",
          background: "#FCFCFC",
          borderRight: "1px solid #D7D7D7",
        }}
      >
        <Typography
          sx={{
            color: " #ADADAD",
            fontFamily: "Roboto",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1.875rem",
          }}
        >
          SITES
        </Typography>
      </Box>
      <SitesTypography sx={{ color: "#42A4DF" }}>All</SitesTypography>
      {siteNames.map((site, index) => (
        <SitesTypography key={index}>{site}</SitesTypography>
      ))}
    </Box>
  );
}

export default SubPages;
