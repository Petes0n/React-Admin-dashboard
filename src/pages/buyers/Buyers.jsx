import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TablePagination,
  Typography,
  DialogActions,
  Slide,
  TextField,
  Divider,
  InputAdornment,
  DialogContentText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "./buyers.scss";
import { addBuyerInputField } from "../../data";

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
    amountPaid: 20000,
  },
  {
    sn: 2,
    name: "Joana Sufre",
    telephone: "+233 55689024",
    buyersId: 187451,
    amountPaid: 5000,
  },
  {
    sn: 3,
    name: "Paulina Yeboah",
    telephone: "+233 55600024",
    buyersId: 124560,
    amountPaid: 200,
  },
  {
    sn: 4,
    name: "Hughes Jefferson",
    telephone: "+233 55600024",
    buyersId: 124560,
    amountPaid: 200,
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Buyers() {
  const [userInput, setUserInput] = useState("");
  const [newBuyer, setNewBuyer] = useState("");
  const [result, setAmount] = useState(() => {
    //useState hook is used to initialize the result state with the
    //value retrieved from localStorage, if it exists. Otherwise, it's set to 0.
    const savedResult = localStorage.getItem("result");
    return savedResult ? parseInt(savedResult, 10) : 0;
  });
  useEffect(() => {
    //the result will be stored in the browser's local storage, and even if the page is refreshed,
    //it will be retrieved from localStorage and displayed in the component.
    localStorage.setItem("result", result.toString());
  }, [result]);

  const handleAdd = () => {
    setOpen(false);
    const numberToAdd = parseInt(userInput, 10);
    setAmount((prevResult) => prevResult + numberToAdd);
  };
  // const handleSingleUserAdd = () => {
  //   setOpen(false);
  //   const numberToAdd = parseInt(userInput, 10);
  //   setAmount((prevResult) => prevResult + numberToAdd);
  // };

  // handleChange function handles the change in value of the buying amount
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleNewBuyer = (e) => {
    // handleNewBuyer function handles the change in value of the new buyer
    setNewBuyer(e.target.value);
  };
  // we use useState to manage the count state, and setCount to update it.
  //The counter function remains the same.The useEffect hook calls counter when the component mounts
  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setAmount(count);
      }, 1000);
    }
  };
  useEffect(() => {
    counter(0, result);
    //The empty dependency array ([]) ensures that useEffect only runs once on component mount.
  }, []);

  const [page, pageChange] = useState(0);
  const [pageRow, setRows] = useState(rows);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleNewPage = (e, newPage) => {
    pageChange(newPage);
  };
  const handleRowsChange = (event) => {
    setRowsPerPage(+event.target.value);
    pageChange(5);
  };
const [editBuyerDetails,setEditBuyer] = useState({
  buyerNewName:'',
  telephoneNumber:'',
  newEmailAddress:''
});
function submit(e) {
  e.preventDefault();
  console.log("editBuyerDetails:",editBuyerDetails);
}
  const [open, setOpen] = useState(false);
  const handleClickOpenAddAmount = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAddNewBuyer, setAddNewBuyer] = useState(false);
  const handleClickOpenAddNewBuyer = () => {
    setAddNewBuyer(true);
  };
  const handleClickCloseAddNewBuyer = () => {
    setAddNewBuyer(false);
  };

  const [openEditBuyer, setOpenBuyer] = useState(false);
  const handleClickOpenEditBuyer = () => {
    setOpenBuyer(true);
  };
  const handleClickCloseEditBuyer = () => {
    setOpenBuyer(false);
  };
  return (
    <div>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>BUYERS</h1>
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-box one">
          <div className="content">
            <Typography
              sx={{ paddingTop: "10px", fontWeight: "900px", fontSize: "40px" }}
              variant="h5"
            >
              Total Amount ₵{result}
            </Typography>
            <Typography
              sx={{ paddingTop: "10px", marginBottom: "25px" }}
              variant="h6"
            >
              Previously Added Amount
              <span className="prev-added"> ₵{userInput}</span>
            </Typography>
            <Button
              variant="contained"
              sx={{
                justifyContent: "center",
                marginLeft: "30px",
                marginTop: "100px",
              }}
              onClick={handleClickOpenAddAmount}
            >
              Add Amount
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>Enter Amount</DialogTitle>
              <DialogContent>
                <TextField
                  id="outlined-number"
                  type="number"
                  value={userInput}
                  onChange={handleChange}
                  required
                 
                  onKeyUp={(event) => {
                    // Listens to the keyboard when the "Enter" key pressed **ONLY THE ENTER KEY
                    //  ** similar to clicking the **ADD** Button
                    // Long story short both perform the same function by calling the handleAdd function.
                    //  ie. Adding the entered number to the initial number to get the sum
                    if (event.key === "Enter") {
                      handleAdd();
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAdd}>Add</Button>
              </DialogActions>
            </Dialog>
            {/* Add new buyer    */}
            <Button
              variant="contained"
              sx={{
                justifyContent: "center",
                marginLeft: "100px",
                marginTop: "100px",
              }}
              onClick={handleClickOpenAddNewBuyer}
            >
              <AddIcon />
              Add New Buyer
            </Button>
            <Dialog
              open={openAddNewBuyer}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              {/* Adding new buyer form */}
              <DialogTitle>New Buyer</DialogTitle>
              <DialogContent>
                {addBuyerInputField.map((inputField) => {
                  return (
                    <TextField
                      key={inputField.id}
                      id={inputField.fieldId}
                      label={inputField.fieldLabel}
                      variant={inputField.fieldVariant}
                      type={inputField.fieldType}
                      fullWidth
                      sx={{ marginBottom: "10px" }}
                      required={inputField.fieldRequired}
                      onChange={handleNewBuyer}
                    />
                  );
                })}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClickCloseAddNewBuyer}>Cancel</Button>
                <Button onClick={handleClickCloseAddNewBuyer}>Add</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
      <div style={{ height: 270 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 400, maxHeight: 400}}
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
                <StyledTableCell align="right">Buyer's ID</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{marginBottom:'90px'}}>
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
                        {row.buyersId}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{ marginLeft: "10px" }}
                      >
                        <div className="cellAction">
                          <Button
                            title="Edit"
                            onClick={handleClickOpenEditBuyer}
                          >
                            <EditIcon
                              sx={{ fontSize: "30px" }}
                              className="viewButton"
                            ></EditIcon>
                          </Button>
                          <Dialog
                            open={openEditBuyer}
                            onClose={handleClickCloseEditBuyer}
                            TransitionComponent={Transition}
                            keepMounted
                          >
                            <DialogTitle>Edit Buyer Information</DialogTitle>
                            <DialogContent>
                              <TextField
                                id="standard-helperText"
                                label="Enter Name"
                                defaultValue="Hether Owens"
                                variant="standard"
                                fullWidth
                                sx={{ marginBottom: "20px" }}
                                onChange={(e)=>{
                                  setEditBuyer({ ...editBuyerDetails, buyerNewName: e.target.value })
                                }}
                              />
                              <TextField
                                id="standard-helperText"
                                label="Telephone Number"
                                defaultValue="+23355689024"
                                variant="standard"
                                fullWidth
                                sx={{ marginBottom: "20px" }}
                                onChange={(e)=>{
                                  setEditBuyer({ ...editBuyerDetails, telephoneNumber: e.target.value })
                                }}
                              />
                              <TextField
                                id="standard-helperText"
                                label="Email Address"
                                defaultValue="Heatherowens@gmail.com"
                                variant="standard"
                                fullWidth
                                sx={{ marginBottom: "20px" }}
                                onChange={(e)=>{
                                  setEditBuyer({ ...editBuyerDetails, newEmailAddress: e.target.value })
                                }}
                              />
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClickCloseEditBuyer}>
                                Cancel
                              </Button>
                              <Button onClick={submit}>Edit</Button>
                            </DialogActions>
                          </Dialog>
                          <Button title="Delete">
                            <DeleteIcon
                              sx={{ fontSize: "30px" }}
                              className="delButton icon"
                            >
                              Delete
                            </DeleteIcon>
                          </Button>
                          <Button title="Add Amount">
                            <AddIcon
                              sx={{ fontSize: "30px" }}
                              className="addButton icon"
                              onClick={handleClickOpenAddAmount}
                            ></AddIcon>
                          </Button>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
          <Divider />
          <TablePagination
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
