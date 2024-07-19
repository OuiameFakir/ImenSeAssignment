import { Box, Typography } from "@mui/material";
import React from "react";
import { FilterContainer, MainBodyContainer } from "./mainBody.style";
import SearchBar from "./searchBar";
import Image from "next/image";
import ContractorBox from "./constractor";
import CustomTable from "./table";
import DateRange from "./dateRange";

function MainBody() {
  return (
    <MainBodyContainer>
      <Box
        sx={{
          display: "flex",
          height: "1.875rem",
          width: "100%",
          flexShrink: 0,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#313131",
            fontFamily: "Roboto",
            fontSize: { xs: "0.6rem", md: "1rem", lg: "1rem" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1.875rem",
          }}
        >
          P.P.E Violations Table
        </Typography>
        <FilterContainer>
          <SearchBar />
          <DateRange />
          <ContractorBox />
          <Box sx={{ width: "2.125rem" }}>
            <Image
              src={"/images/maximize.svg"}
              width={34}
              height={30}
              alt={"maximize"}
            />
          </Box>
        </FilterContainer>
      </Box>
      <Box>
        <CustomTable />
      </Box>
    </MainBodyContainer>
  );
}

export default MainBody;
