import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const MainBodyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  padding: " 1.6875rem 2.1875rem 2.9375rem 2.25rem",
  background: "#F2F2F2",
});

export const FilterContainer = styled(Box)(({}) => ({
  display: "flex",
  height: "1.875rem",
  justifyContent: "center",
  gap: "0.6875rem",
}));
