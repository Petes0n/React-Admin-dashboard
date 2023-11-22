import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import "./single.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../components/styledTable/StyledTableCell";
import { singleUserDetailData, singleUserData } from "../../data";
import { useState } from "react";
import { Transition } from "../../scenes/modals/effects/transition";


const Single = () => {
  const [page, pageChange] = useState(0);
  const [open, setOpen] = useState(false);
  const [editProfile, setEditProfile] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    newProfilePicture: "",
    file: "",
  });

 // Function to handle form submission
  const submit = (event) => {
event.preventDefault();
  };
 //state variables and event handlers for pagination
  const [pageRow] = useState(singleUserDetailData);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleNewPage = (e, newPage) => {
    pageChange(newPage);
  };
  const handleRowsChange = (event) => {
    setRowsPerPage(+event.target.value);
    pageChange(5);
  };
   // Event handlers for opening and closing the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>User Details And Settings</h1>
          </div>
        </div>
      </div>
       {/* Dialog for editing profile */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle sx={{ marginLeft: "230px", marginBottom: "5px" }}>
          Edit Profile
        </DialogTitle>
          {/* Profile image section */}
        <div className="single-user-porfile">
          <img
            src={
              editProfile.file
                ? URL.createObjectURL(editProfile.file)
                : "/noavatar.png"
            }
            alt=""
            className="singleUserImage"
          />
        </div>
        <div className="user-detail-content">
          <div className="dialog-left">
            <DialogContent>
               {/* Form for editing user details */}
              <TextField
                id="standard-helperText"
                label="Enter Name"
                defaultValue="Hether Owens"
                variant="standard"
                fullWidth
                sx={{ marginBottom: "20px", marginTop: "50px" }}
                onChange={(e) => {
                  setEditProfile({
                    ...editProfile,
                    name: e.target.value,
                  });
                }}
              />
              <TextField
                id="standard-helperText"
                label="Email Address"
                defaultValue="Heatherowens@gmail.com"
                variant="standard"
                fullWidth
                sx={{ marginBottom: "20px" }}
                onChange={(e) => {
                  setEditProfile({
                    ...editProfile,
                    email: e.target.value,
                  });
                }}
              />
              <TextField
                id="standard-helperText"
                label="Telephone Number"
                defaultValue="+23355689024"
                variant="standard"
                fullWidth
                sx={{ marginBottom: "5px" }}
                onChange={(e) => {
                  setEditProfile({
                    ...editProfile,
                    telephoneNumber: e.target.value,
                  });
                }}
              />
            </DialogContent>
          </div>
          <div className="dialog-right">
            <DialogContent>
              <Typography variant="h6" sx={{ color: "red" }}>
                Edit Password Only
              </Typography>
              <TextField
                label="Enter old password"
                variant="standard"
                fullWidth
                sx={{ marginBottom: "10px" }}
                onChange={(e) => {
                  setEditProfile({
                    ...editProfile,
                    oldPassword: e.target.value,
                  });
                }}
              />
              <TextField
                label="New Password"
                variant="standard"
                fullWidth
                sx={{ marginBottom: "20px" }}
                onChange={(e) => {
                  setEditProfile({
                    ...editProfile,
                    newPassword: e.target.value,
                  });
                }}
              />
              <TextField
                label="Confirm Password"
                variant="standard"
                fullWidth
                sx={{ marginBottom: "20px" }}
                onChange={(e) => {
                  setEditProfile({
                    ...editProfile,
                    confirmPassword: e.target.value,
                  });
                }}
              />
              <label htmlFor="file">
                <span style={{ cursor: "pointer" }}>Upload Image </span>

                <input
                  type="file"
                  id="file"
                  value={""}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, file: e.target.files[0] })
                  }
                  style={{ display: "none" }}
                />
              </label>
            </DialogContent>
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submit}>Edit</Button>
        </DialogActions>
      </Dialog>
      <div className="single">
        <div className="singleContainer">
          <div className="top">
            <div className="left">
              <div className="editButton" onClick={() => handleClickOpen()}>
                Edit
              </div>
              <h1 className="title">User Information</h1>
              <div className="item">
                <img
                  src="https://picsum.photos/200"
                  alt="picsum"
                  className="itemImage"
                />
                <div className="details">
                  <div className="detailItem">
                    <span className="itemKey">Email: </span>
                    <span className="itemValue">Johnnydepp@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone: </span>
                    <span className="itemValue">+233 558890253</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address: </span>
                    <span className="itemValue">Accra</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country: </span>
                    <span className="itemValue">Ghana</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
               {/* Recharts AreaChart for displaying data */}
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={300}
                  height={400}
                  data={singleUserData}
                  margin={{
                    top: 0,
                    right: 30,
                    left: 2,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="months" />
                  <YAxis />

                  <Area
                    dataKey="uv"
                    type="monotone"
                    stroke="white"
                    fill="#FFD700"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bottom">
             {/* Bottom section with a table of previous transactions */}
            <Typography variant="h4"> Previous Transactions</Typography>
            <div style={{ height: 270 }}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 400, maxHeight: 400 }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">SN</StyledTableCell>
                      <StyledTableCell align="right">Month</StyledTableCell>
                      <StyledTableCell align="right">
                        Quantity Sold
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Items Received
                      </StyledTableCell>
                      <StyledTableCell align="right">Balance</StyledTableCell>
                      <StyledTableCell align="right">
                        Total Cash
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {singleUserDetailData &&
                      pageRow
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((detail) => (
                          <StyledTableRow key={detail.id}>
                            <StyledTableCell align="right">
                              {detail.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {detail.Month}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {detail.QuantitySold}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {detail.itemsReceived}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {detail.balance}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {detail.totalCash}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                  </TableBody>
                </Table>
                <Divider />
                <TablePagination
                  variant="outlined"
                  color="primary"
                  rowsPerPage={rowsPerPage}
                  page={page}
                  component="div"
                  onPageChange={handleNewPage}
                  onRowsPerPageChange={handleRowsChange}
                  count={singleUserDetailData.length}
                  sx={{
                    color: "black",
                  }}
                ></TablePagination>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
