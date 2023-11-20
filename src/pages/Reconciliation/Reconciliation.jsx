import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, Divider, Typography } from "@mui/material";
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
import { ReconciliationGraphData, reconciliationRows } from "../../data";
import { StyledTableCell, StyledTableRow } from "../../components/styledTable/StyledTableCell";



export default function Reconciliation() {
  const [page, pageChange] = useState(0);
  const [pageRow, setRows] = useState(reconciliationRows);
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
          <BarChart width={100} height={40} data={reconciliationRows}>
            <XAxis dataKey={'name'}style={{color:'white'}}/>
            <YAxis/>
            <Bar dataKey="amountPaid" >
              {ReconciliationGraphData.map((entry, index) => (
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
              {reconciliationRows &&
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
            count={reconciliationRows.length}
            sx={{
              color: "black",
            }}
          ></TablePagination>
        </TableContainer>
      </div>
    </div>
  );
}



