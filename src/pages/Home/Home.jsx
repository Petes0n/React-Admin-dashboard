import BarChartBox from "../../components/barchartbox/Barchart";
import BigChart from "../../components/bigchart/BigChart";
import ChartBox from "../../components/chartbox/ChartBox";
import PieChartBox from "../../components/piechart/PieChart";
import Topbox from "../../components/topbox/TopBox";
import {
  chartBoxUser,
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxProduct,
  barChartBoxVisit,
  barChartBoxRevenue,
  homeTableData,
} from "../../data";
import "./home.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";

function Home() {
  const [page, pageChange] = useState(0);
  const [row, setRows] = useState(homeTableData);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleNewPage = (e, newPage) => {
    pageChange(newPage);
  };
  const handleRowsChange = (event) => {
    setRowsPerPage(+event.target.value);
    pageChange(5);
  };
  return (
    <>
      <div className="">
        <div className="home">
          <div className="box box1">
            <Topbox />{" "}
          </div>
          <div className="box box2">
            <ChartBox {...chartBoxUser} />{" "}
          </div>
          <div className="box box3">
            <ChartBox {...chartBoxConversion} />{" "}
          </div>
          <div className="box box4">
            <PieChartBox />
          </div>
          <div className="box box5">
            <ChartBox {...chartBoxProduct} />{" "}
          </div>
          <div className="box box6">
            <ChartBox {...chartBoxRevenue} />{" "}
          </div>
          <div className="box box7">
            <BigChart />{" "}
          </div>
          <div className="box box8">
            <BarChartBox {...barChartBoxVisit} />{" "}
          </div>
          <div className="box box9">
            <BarChartBox {...barChartBoxRevenue} />
          </div>
        </div>
        <TableContainer
          component={Paper}
          className="table"
          sx={{ minWidth: 650, overflowY: "scroll", maxHeight: 450 }}
        >
          <Table
            sx={{ minWidth: 650, backgroundColor: "white", color: "black" }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell className="tablecell">Tracking ID</TableCell>
                <TableCell className="tablecell">Product</TableCell>
                <TableCell className="tablecell">Customer</TableCell>
                <TableCell className="tablecell">Date</TableCell>
                <TableCell className="tablecell">Amount</TableCell>
                <TableCell className="tablecell">Method</TableCell>
                <TableCell className="tablecell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {homeTableData &&
                row
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="tablecell" sx={{ color: "black" }}>
                        {row.id}
                      </TableCell>
                      <TableCell className="tablecell" sx={{ color: "black" }}>
                        <div className="cellWrapper">
                          <img src={row.img} alt="" className="image" />
                          {row.Product}
                        </div>
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.method}</TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <span className={`status ${row.status}`}>
                          {row.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowsPerPage}
          page={page}
          component="div"
          onPageChange={handleNewPage}
          onRowsPerPageChange={handleRowsChange}
          count={homeTableData.length}
          sx={{
            color: "black",
          }}
        ></TablePagination>
      </div>
    </>
  );
}

export default Home;
