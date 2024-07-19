import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  TextField,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

const DateRange = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = () => {
    handleClose();
  };

  const handleCancel = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    handleClose();
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start ?? undefined);
    setEndDate(end ?? undefined);
  };

  return (
    <Box
      sx={{
        borderRadius: "0.125rem",
        border: "1px solid #D8D8D8",
        background: "#FFF",
        display: "flex",
        alignContent: "center",
      }}
    >
      <Button
        disableRipple
        disableFocusRipple
        onClick={handleClick}
        sx={{
          color: "#313131",
          fontFamily: "Roboto",
          fontSize: { xs: "0.4rem", md: "0.4rem", lg: "0.75rem" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.875rem",
          textAlign: "center",
          gap: { md: "0.2rem", lg: "1rem" },
        }}
      >
        {startDate && endDate
          ? `${format(startDate, "dd/MM/yyyy")} - ${format(
              endDate,
              "dd/MM/yyyy"
            )}`
          : "29/10/2022 - 29/11/2022"}
        <Image
          src={"/images/Arrow 2.svg"}
          alt={"Arrow"}
          width={10}
          height={10}
        />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              disableRipple
              disableFocusRipple
              sx={{
                textTransform: "none",
                fontFamily: "Roboto",
                fontSize: "0.75rem",
                fontWeight: 500,
                borderRadius: "0.125rem",
                border: "1px solid #D8D8D8",
                color: "#313131",
                fontStyle: "normal",
                lineHeight: "1.875rem",
                width: "5rem",
                height: "2rem",
                background: "#FFF",
                gap: "1rem",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Custom
              <Image
                src={"/images/Arrow 2.svg"}
                alt={"Arrow"}
                width={10}
                height={10}
              />
            </Button>
            <Typography
              sx={{
                color: "#989797",
                fontFamily: "Roboto",
                fontSize: "0.6875rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.875rem",
                mt: 2,
              }}
            >
              Date range
            </Typography>

            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              customInput={<TextField label="Date Range" />}
            />
          </Box>
        </MenuItem>
        <MenuItem
          disableRipple
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            background: "white",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Button
            onClick={handleCancel}
            disableRipple
            disableFocusRipple
            sx={{
              textTransform: "none",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#B6B6B6",
              fontStyle: "normal",
              lineHeight: "1.875rem",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#B6B6B6",
              },
              "&:focus": {
                backgroundColor: "transparent",
                color: "#B6B6B6",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleApply}
            disableRipple
            disableFocusRipple
            sx={{
              textTransform: "none",
              fontFamily: "Roboto",
              fontSize: "0.75rem",
              fontWeight: 500,
              borderRadius: "0.125rem",
              border: "1px solid #28A43C",
              background: "#37C34D",
              color: "#FFF",
              fontStyle: "normal",
              lineHeight: "1.875rem",
              width: "5rem",
              height: "2rem",
              "&:hover": {
                backgroundColor: "#37C34D",
                color: "#FFF",
              },
              "&:focus": {
                backgroundColor: "#37C34D",
                color: "#FFF",
              },
            }}
          >
            Apply
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DateRange;
