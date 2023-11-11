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
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

function Home() {
  // const theme = useTheme();
  // const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const data = [
    {
      id: 1,
      Product: "Acer Nitro 5",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 2,
      Product: "Pavilion",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "MOMO",
      status: "Approved",
    },
    {
      id: 3,
      Product: "HP envy",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 4,
      Product: "HP envy",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 5,
      Product: "HP 8456",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Online",
      status: "Approved",
    },
    {
      id: 6,
      Product: "HP 8456",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Online",
      status: "Approved",
    },
    {
      id: 7,
      Product: "HP 8456",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Online",
      status: "Approved",
    },
    {
      id: 8,
      Product: "HP 8456",
      img: "https://picsum.photos/100",
      customer: "Peter",
      date: "1 January",
      amount: 465,
      method: "Online",
      status: "Approved",
    },
  ];
  const [page, pageChange] = useState(0);
  const [row, setRows] = useState(data);
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
            sx={{ minWidth: 650, backgroundColor: "#2a3447" }}
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
              {data &&
                row
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="tablecell" sx={{ color: "white" }}>
                        {row.id}
                      </TableCell>
                      <TableCell className="tablecell" sx={{ color: "white" }}>
                        <div className="cellWrapper">
                          <img src={row.img} alt="" className="image" />
                          {row.Product}
                        </div>
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>{row.id}</TableCell>
                      <TableCell sx={{ color: "white" }}>{row.date}</TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {row.amount}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {row.method}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
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
          count={data.length}
          sx={{
            color: "white",
          }}
        ></TablePagination>
      </div>
    </>
  );
}

export default Home;
