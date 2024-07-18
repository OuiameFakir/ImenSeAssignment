import { Box, Divider, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import {
  ItemTypography,
  ItemContainer,
  ItemsContainer,
} from "./sideNavbar.style";

interface SideNavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavbar: React.FC<SideNavbarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <Box
      sx={{
        width: isSidebarOpen ? "15.625rem" : "3.9375rem",
        height: "100%",
        borderRight: "1px solid #D7D7D7",
        padding: 0,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "width 0.3s",
        position: "sticky",
        left: 0,
        top: 0,
        zIndex: 100,
      }}
    >
      {isSidebarOpen ? (
        <>
          <Box sx={{ width: "15.625rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <Image
                src={"/images/logo 1.svg"}
                width={194}
                height={43}
                alt="logo"
              />
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
            </Box>
            <ItemsContainer>
              <ItemContainer>
                <Image
                  src={"/images/Dashboard.svg"}
                  alt="Dashboard"
                  width={18}
                  height={18}
                />
                <ItemTypography>Dashboard</ItemTypography>
              </ItemContainer>
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "0.3125rem",
                  background: "#42A4DF",
                  width: "12.625rem",
                  height: "2.25rem",
                  alignItems: "center",
                  gap: "0.82rem",
                  paddingX: "0.38rem",
                  marginTop: "1rem",
                }}
              >
                <Image
                  src={"/images/Group 688.svg"}
                  alt="Group 688"
                  width={20}
                  height={20}
                />
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Roboto",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    lineHeight: "1.875rem",
                  }}
                >
                  P.P.E Violations
                </Typography>
              </Box>
            </ItemsContainer>
            <Typography
              sx={{
                color: "#B7B7B7",
                fontFamily: "Roboto",
                fontSize: "0.75rem",
                fontWeight: 500,
                lineHeight: "1.875rem",
                alignSelf: "start",
                padding: "1.12rem",
              }}
            >
              MANAGE
            </Typography>
            <ItemsContainer>
              <ItemContainer>
                <Image
                  src={"/images/PPE.svg"}
                  alt="P.P.Es"
                  width={16}
                  height={16}
                />
                <ItemTypography>P.P.Es</ItemTypography>
              </ItemContainer>
              <ItemContainer>
                <Image
                  src={"/images/Contractors.svg"}
                  alt="Contractors"
                  width={18}
                  height={18}
                />
                <ItemTypography>Contractors</ItemTypography>
              </ItemContainer>
              <ItemContainer>
                <Image
                  src={"/images/Workers.svg"}
                  alt="Workers"
                  width={18}
                  height={18}
                />
                <ItemTypography>Workers</ItemTypography>
              </ItemContainer>
            </ItemsContainer>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                width: "15.625rem",
              }}
            >
              <Divider sx={{ width: "100%" }} />
              <Box
                sx={{
                  width: "12.375rem",
                  padding: "1rem",
                  backgroundColor: "#FFF",
                }}
              >
                <Typography
                  sx={{
                    color: "#939393",
                    fontFamily: "Roboto",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    lineHeight: "1.875rem",
                  }}
                >
                  @ App name 2021
                </Typography>
                <Typography
                  sx={{
                    color: "#8A8A8A",
                    fontFamily: "Roboto",
                    fontSize: "0.6875rem",
                    fontWeight: 400,
                    lineHeight: "1.09375rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              height: "10.81rem",
            }}
          >
            <Box
              sx={{
                width: "34px",
                height: "35.695px",
                flexShrink: 0,
                border: "1px solid #000",
              }}
            >
              <Image
                src={"/images/logo.svg"}
                width={34}
                height={35.695}
                alt="logo"
              />
            </Box>
            <Box
              sx={{
                width: "1.25rem",
                height: "3.75rem",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Image
                src={"/images/mainModuls.svg"}
                width={20}
                height={60}
                alt="main moduls"
              />
            </Box>
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              height: "8.4375rem",
              flexShrink: 0,
              paddingTop: "1.75rem",
              position: "relative",
            }}
          >
            <Image
              src={"/images/settings.svg"}
              width={17}
              height={135}
              alt="settings"
            />
            {!isSidebarOpen && (
              <Typography
                sx={{
                  position: "absolute",
                  left: "calc(100% + 1.5rem)",
                  marginTop: "2.5rem",
                  whiteSpace: "nowrap",
                  backgroundColor: "#000",
                  color: "#FFF",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "0.25rem",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Workers
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SideNavbar;
