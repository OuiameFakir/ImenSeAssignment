import React, { useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Box,
  IconButton,
  Checkbox,
  FormControlLabel,
  Drawer,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { workers, WorkerItemData } from "@/utils/data";
import { items } from "@/utils/data";

const CustomTable: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode>(null);
  const [selectedColumns, setSelectedColumns] = useState<
    (keyof WorkerItemData)[]
  >(items.map((item) => item.id));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = (content: React.ReactNode) => {
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleToggleColumn = (columnId: keyof WorkerItemData) => {
    setSelectedColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const isColumnSelected = (columnId: keyof WorkerItemData) =>
    selectedColumns.includes(columnId);

  const renderDrawerContent = (
    rowId: number,
    item: (typeof items)[0],
    timestamp: string,
    commentNumber: string
  ) => (
    <Box
      sx={{
        width: "18.5rem",
        height: "34.75rem",
        fill: "#FFF",
        strokeWidth: "1px",
        stroke: "#EDEDED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Image
        src={"/items/popup1.svg"}
        alt={"popup pic 1"}
        width={266}
        height={163}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5.31rem",
        }}
      >
        <Typography
          sx={{
            color: "#929292",
            fontFamily: "Roboto",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: " 1.34375rem",
          }}
        >
          Comment
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <Image src={"/items/time.svg"} alt="clock" width={12} height={12} />
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.875rem",
            }}
          >
            {timestamp}{" "}
            <span style={{ fontWeight: "bold" }}>{commentNumber}</span>{" "}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "15.5rem",
          height: "3.9375rem ",
          borderRadius: "0.3125rem",
          border: "0.5px solid #E1E1E1",
          background: " #F8F8F8",
          color: "#313131",
          fontFamily: "Roboto",
          fontSize: "0.6875rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.0625rem",
          padding: "0.7rem",
        }}
      >
        consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et
        dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore
      </Box>
      <Divider sx={{ width: "100%", paddingY: "11px" }} />
      <Image
        src={"/items/popup2.svg"}
        alt={"popup pic 2"}
        width={266}
        height={163}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5.31rem",
        }}
      >
        <Typography
          sx={{
            color: "#929292",
            fontFamily: "Roboto",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: " 1.34375rem",
          }}
        >
          Comment
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <Image src={"/items/time.svg"} alt="clock" width={12} height={12} />
          <Typography
            sx={{
              color: "#313131",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.875rem",
            }}
          >
            15/11/2022 10:34 <span style={{ fontWeight: "bold" }}>#07</span>{" "}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "15.5rem",
          height: "3.9375rem ",
          borderRadius: "0.3125rem",
          border: "0.5px solid #E1E1E1",
          background: " #F8F8F8",
          color: "#313131",
          fontFamily: "Roboto",
          fontSize: "0.6875rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.0625rem",
          padding: "0.7rem",
        }}
      >
        consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et
        dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore
      </Box>
    </Box>
  );

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          marginY: "1rem",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ border: "1px solid #D8D8D8" }}>
              <TableCell
                sx={{
                  width: "2.1875rem",
                  minWidth: "2.1875rem",
                  flexShrink: 0,
                  border: "1px solid #D8D8D8",
                  position: "sticky",
                  left: 0,
                  zIndex: 20,
                  backgroundColor: "#FFF",
                }}
              >
                {" "}
                <IconButton
                  aria-controls="params"
                  aria-haspopup="true"
                  onClick={handleClick}
                  disableRipple
                  disableFocusRipple
                >
                  <Image
                    src={"/items/params.svg"}
                    alt={""}
                    width={15}
                    height={15}
                  />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  color: "#737373",
                  fontFamily: "Lato",
                  fontSize: "0.75rem",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textAlign: "center",
                  border: "1px solid #D8D8D8",
                  position: "sticky",
                  left: "4.25rem",
                  zIndex: 20,
                  backgroundColor: "#FFF",
                  width: "15.31rem",
                }}
              >
                Workers
              </TableCell>
              {items
                .filter((item) => isColumnSelected(item.id))
                .map((item) => (
                  <TableCell
                    key={item.id}
                    align="center"
                    sx={{ border: "1px solid #D8D8D8" }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Image
                        src={item.img}
                        alt={item.label}
                        width={90}
                        height={90}
                      />
                      <Typography variant="caption">{item.label}</Typography>
                    </Box>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {workers.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    width: "2.1875rem",
                    minWidth: "2.1875rem",
                    flexShrink: 0,
                    fill: "#FFF",
                    strokeWidth: "1px",
                    stroke: "#D8D8D8",
                    textAlign: "center",
                    border: "1px solid #D8D8D8",
                    position: "sticky",
                    left: 0,
                    zIndex: 20,
                    backgroundColor: "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#909090",
                      fontFamily: "Roboto",
                      fontSize: "0.75rem",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "1.875rem",
                    }}
                  ></Typography>

                  {row.id}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: "1px solid #D8D8D8",
                    position: "sticky",
                    left: "4.25rem",
                    zIndex: 20,
                    backgroundColor: "#FFF",
                  }}
                >
                  <Box display="flex" gap="4rem" alignItems={"center"}>
                    <Box display="flex" gap="0.5rem">
                      <Avatar
                        src={row.profilePic}
                        alt={row.name}
                        sx={{ border: "1px solid #D8D8D8" }}
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#484848",
                            fontFamily: "Roboto",
                            fontSize: "0.75rem",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "0.9375rem",
                          }}
                        >
                          {row.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#909090 ",
                            fontFamily: "Roboto",
                            fontSize: "0.6875rem",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                          }}
                        >
                          {row.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Image
                      src={row.companyLogo}
                      alt="Company Logo"
                      width={40}
                      height={40}
                    />
                  </Box>
                </TableCell>
                {items
                  .filter((item) => isColumnSelected(item.id))
                  .map((item) => (
                    <TableCell
                      key={item.id}
                      align="center"
                      sx={{ border: "1px solid #D8D8D8" }}
                    >
                      {row.items[item.id] !== undefined ? (
                        <>
                          <IconButton
                            aria-controls={`drawer-${row.id}-${item.id}`}
                            aria-haspopup="true"
                            onClick={() =>
                              handleDrawerOpen(
                                renderDrawerContent(
                                  row.id,
                                  item,
                                  "15/11/2022 10:34",
                                  "#03"
                                )
                              )
                            }
                            disableRipple
                            disableFocusRipple
                          >
                            {row.items[item.id] === 0 ? (
                              <Box color={"#C4C4C4"} fontWeight={700}>
                                -
                              </Box>
                            ) : (
                              <Box
                                display="inline-flex"
                                width={30}
                                height={30}
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="50%"
                                sx={{
                                  fontFamily: "Roboto",
                                  fontSize: "0.875rem",
                                  fontStyle: "normal",
                                  fontWeight: 700,
                                  lineHeight: "1rem",
                                }}
                                bgcolor={
                                  row.items[item.id] > 5 ? "#EF3C3C" : "#F8CC23"
                                }
                                color={
                                  row.items[item.id] > 5 ? "white" : "#313131"
                                }
                              >
                                {row.items[item.id]}
                              </Box>
                            )}
                          </IconButton>
                        </>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        {drawerContent}
      </Drawer>
      <Menu
        id="params"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: "0.5rem 1rem" }}>
          <Typography
            sx={{
              color: "#989797",
              fontFamily: "Roboto",
              fontSize: "0.6875rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.875rem",
            }}
          >
            Select columns to display
          </Typography>
          {items.map((item) => (
            <MenuItem key={item.id} sx={{ padding: 0 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isColumnSelected(item.id)}
                    onChange={() => handleToggleColumn(item.id)}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: "#313131",
                      fontFamily: "Roboto",
                      fontSize: "0.6875rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              />
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
};

export default CustomTable;
