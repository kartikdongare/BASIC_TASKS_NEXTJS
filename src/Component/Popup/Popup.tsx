"use client";
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
// import Image from 'next/image';

const Popup = ({open,handleClose,ele}:any) => {
    console.log(ele,'ele1')
  return (
    // <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box>
            {/* <Typography variant='p'>Title:{ele.title}</Typography>
            <Typography variant='p'>brand:{ele.brand}</Typography>
            <Typography variant='p'>price:{ele.price}</Typography> */}
            {ele.title}
             <Box>
                {/* <Image src={ele?.images[0]} alt='image' width={100} height={100}/> */}
            </Box>
            </Box>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    // </div>
  )
}

export default Popup
