import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import "./reconciliation.scss";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    sn: 1,
    name: "Heather Owens",
    telephone: "+233 55689024",
    buyersId: 104561,
    balance: 12,
    amountPaid: 200,
  },
  {
    sn: 2,
    name: "Joana Sufre",
    telephone: "+233 55689024",
    buyersId: 187451,
    balance: 60,
    amountPaid: 500,
  },
  {
    sn: 3,
    name: "Paulina Yeboah",
    telephone: "+233 55600024",
    buyersId: 124560,
    balance: '--',
    amountPaid: 200,
  },
  {
    sn: 4,
    name: "Hughes Jefferson",
    telephone: "+233 55600024",
    buyersId: 124560,
    balance: 160,
    amountPaid: 200,
  },
  {
    sn: 5,
    name: "Anna Munroe",
    telephone: "+233 55600774",
    buyersId: 120560,
    balance: 160,
    amountPaid: 100,
  },
  {
    sn: 6,
    name: "James Jefferson",
    telephone: "+233 55600024",
    buyersId: 194560,
    balance: 10,
    amountPaid: 200,
  },
  {
    sn: 7,
    name: "Henry Hill",
    telephone: "+233 55607024",
    buyersId: 164560,
    balance: 40,
    amountPaid: 600,
  },
];

const data = [
  {
    name: "Heather Owens",
    uv: 80,
  },
  {
    name: "Joana Sufre",
    uv: 30,
  },
  {
    name: "Paulina Yeboah",
    uv: 20,
  },
  {
    name: "Hughes Jefferson",
    uv: 67,
  },
];

export default function Reconciliation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [page, pageChange] = useState(0);
  const [pageRow, setRows] = useState(rows);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const handleNewPage = (e, newPage) => {
    pageChange(newPage);
  };
  const handleRowsChange = (event) => {
    setRowsPerPage(+event.target.value);
    pageChange(5);
  };

  return (
    <div>
       <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>RECONCILIATION</h1>
        </div>
      </div>
      </div>
      <div className="reconciliation-flex-container">
        <div className="reconciliation-flex-box one">
          <div className="reconciliation-content">
            <Typography
              variant="h4"
              sx={{ marginBottom: "70px", padding: "10px" }}
            >
              Users data
            </Typography>
            <div className="reconciliation-barchart">
            <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={100} height={40} data={rows}>
            <XAxis dataKey={'name'}style={{color:'white'}}/>
            <YAxis/>
            <Bar dataKey="amountPaid" >
              {data.map((entry, index) => (
                <Cell  fill={'#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 270 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 400, maxHeight: 400 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">SN</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">
                  Telephone Number
                </StyledTableCell>
                <StyledTableCell align="right">Amount Paid</StyledTableCell>
                <StyledTableCell align="right">Balance</StyledTableCell>
                <StyledTableCell align="right">Buyer's ID</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                pageRow
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow key={row.sn}>
                      <StyledTableCell align="right">{row.sn}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.telephone}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.amountPaid}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.balance}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.buyersId}
                      </StyledTableCell>
                     
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
          <Divider />
          <TablePagination
          variant="outlined" color="primary" 
            rowsPerPage={rowsPerPage}
            page={page}
            component="div"
            onPageChange={handleNewPage}
            onRowsPerPageChange={handleRowsChange}
            count={rows.length}
            sx={{
              color: "black",
            }}
          ></TablePagination>
        </TableContainer>
      </div>
    </div>
  );
}



