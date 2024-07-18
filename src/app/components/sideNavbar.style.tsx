
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const ItemContainer = styled(Box)({
  display: "flex",
  width: "12.625rem",
  height: "2.25rem",
  alignItems: "center",
  gap: "0.82rem",
  paddingX: "0.38rem",
});

export const ItemTypography = styled(Typography)({
  color: "#626262",
  fontFamily: "Roboto",
  fontSize: "0.8125rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.875rem",
});
export const ItemsContainer = styled(Box)({
  width: "15.625rem",
  flexShrink: 0,
  padding: "0.20544rem 6.041rem 0.16956rem 0.38025rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
