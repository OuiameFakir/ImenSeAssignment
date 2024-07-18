import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ContractorBox: React.FC = () => {
  return (
    <Box
      sx={{
        width: "11.4375rem",
        borderRadius: "0.125rem",
        border: "1px solid #D8D8D8",
        background: "#FFF",
        display: "flex",
        paddingRight: "0.3125rem",
        alignItems: "center",
        gap: "4.75rem",
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{
          color: "#909090",
          fontFamily: "Roboto",
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.875rem",
        }}
      >
        All Contractors
      </Typography>
      <Image src="/images/Arrow 2.svg" alt="arrow" width={10} height={10} />
    </Box>
  );
};

export default ContractorBox;
