import React, { useState } from 'react';
import './delete.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material';


export default function Delete({setIsOpen}) {
  const [open, setOpen] = useState(true);
 

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Dialog open={open} >
                  <DialogContent>
                    <DialogContentText sx={{width:450,height:40}}>
                    <Typography variant='h6'sx={{fontWeight:90,}}>Are you sure you want to delete the existing item?</Typography> 
                    </DialogContentText>
                    
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ "&:hover": { backgroundColor: "red" } ,backgroundColor:'red',display:'flex',justifyContent:'space-between'} }
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
                     Delete
                    </Button>
                  </DialogActions>
                </Dialog>
    </>
    
  )
}



