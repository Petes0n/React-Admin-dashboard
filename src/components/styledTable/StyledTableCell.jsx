// Importing MUI components and utilities for styling
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

import TableRow from "@mui/material/TableRow";

// Creating a styled version of TableCell with additional styles
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // Styling for table header cells
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
     // Styling for table body cells
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  

  // Creating a styled version of TableRow with additional styles
  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // Styling for odd-numbered rows to provide a visual distinction
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  