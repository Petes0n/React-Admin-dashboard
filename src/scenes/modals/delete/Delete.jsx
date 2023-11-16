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
                    <Typography variant='h6'sx={{fontWeight:90,color:'black'}}>Are you sure you want to delete the existing item?</Typography> 
                    </DialogContentText>
                    
                  </DialogContent>
                  <DialogActions sx={{display:'flex',padding:'20px'}}>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ "&:hover": { backgroundColor: "whiteSmoke" } ,
                      backgroundColor:'#fff',display:'flex',
                      justifyContent:'space-between',color:'black'
                      ,marginRight:'50px'} }
                      className="cancel"
                    >
                      No
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ "&:hover": { backgroundColor: "gold" } ,
                      backgroundColor:'gold',
                      marginRight:'60px'} }
                      className="add"
                    >
                     Yes
                    </Button>
                  </DialogActions>
                </Dialog>
    </>
    
  )
}



