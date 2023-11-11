import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./config.scss";
import { Button, TableHead, TablePagination, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function Config() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(3);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const tableRows = [
    { name: "Employee", switchName: "employee" },
    { name: "Holidays", switchName: "holidays" },
    { name: "Leave Request", switchName: "leaveRequest" },
    { name: "Events", switchName: "events" },
    { name: "Chat", switchName: "chat" },
  ];

  const [moduleSwitches, setModuleSwitches] = useState({
    employee: false,
    holidays: false,
    leaveRequest: false,
    events: false,
    chat: false,
  });
  //Handle switch changes for each of the switches. Efficient solution
  function handleSwitchChange(switchName) {
    //This toggles the state of the switch checked
    setModuleSwitches((prevValues) => ({
      ...prevValues,
      [switchName]: !prevValues[switchName],
    }));
  }
  const modulePermissions = [
    { id: 1, rowName: "Employee" },
    { id: 2, rowName: "Holidays" },
    { id: 4, rowName: "Leave Request" },
    { id: 5, rowName: "Events" },
    { id: 6, rowName: "Chat" },
  ];

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>CONFIGURATION</h1>
        </div>
      

      <div>
        <div className="container">
          <div className="left-wrapper">
            <div className="one">
              <div>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  align="center"
                  disableRipple
                >
                  Add Role
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add Role</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      To add a role , please enter your role name here. We will
                      send updates occasionally.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Role"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ "&:hover": { backgroundColor: "red" } ,backgroundColor:'red',marginLeft:45} }

                      className="cancel"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ "&:hover": { backgroundColor: "green" } ,backgroundColor:'green'} }

                      className="add"
                    >
                      Add
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <br />
              <TableContainer
                component={Paper}
                sx={{ minHeight: 40, marginTop: -2 }}
              >
                <Table sx={{ minWidth: 350 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <Typography variant="h5">Roles</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableRows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((roles) => {
                        return (
                          <TableRow key={roles.id}>
                            <TableCell align="center" style={{ padding: 10 }}>
                              <Typography>{roles.name}</Typography>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                  <TablePagination
                    rowsPerPageOptions={[3]}
                    component="div"
                    count={tableRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="right-wrapper">
            <div className="three">
              <h3>Module Access</h3>
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 600,}}>
                  <TableBody>
                    {tableRows.map((moduleAccess) => {
                      return (
                        <TableRow key={moduleAccess.id}>
                          <TableCell component="th" scope="row">
                            {moduleAccess.name}
                          </TableCell>
                          <TableCell
                            style={{ width: 70, padding: 0 }}
                            align="right"
                          >
                            <Switch
                              onChange={() =>
                                handleSwitchChange(moduleAccess.switchName)
                              }
                              //Sets the checked status of the switch to the state of the corresponding switch
                              checked={moduleSwitches[moduleAccess.switchName]}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <TableContainer component={Paper} sx={{marginBottom:5}}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell><Typography sx={{fontWeight:90,color:"black"}}>Module Permission</Typography></TableCell>
              {modulePermissions.map((permissions) => {
                return (
                  <TableCell align="right" className="table-text" key={permissions.id}>
                  <Typography sx={{fontWeight:90,color:"black"}}> {permissions.rowName}</Typography> 
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody sx={{ margin: "60px" }}>
            {tableRows.map((rows) =>
              moduleSwitches[rows.switchName] ? (
                <TableRow
                  key={rows.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="rows">
                    {rows.name}
                  </TableCell>
                  <TableCell align="right" key={rows.id}>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell align="right">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell align="right">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell align="right">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell align="right">
                    <input type="checkbox" />
                  </TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
}