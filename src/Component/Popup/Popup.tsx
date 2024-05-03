"use client";
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
// import Image from 'next/image';
import {getCityWheather} from '../../Api'
const Popup = ({open,handleClose,value='',data}:any) => {
  const [wheather,setWheather]=useState('')
  console.log(data,'sdddd')
  const x=async()=>{
    const res=await getCityWheather(data ?? '')
    setWheather(res?.data?.main)
    console.log(res,'aaaaaaaaaaaaaa')
  }
  x()
    // useEffect(()=>{
    //   (async()=>{
    //     const res=await getCityWheather(data ?? '')
    //     setWheather(data?.main)
    //     // console.log(res.data.main,'kjhcx')
    //   })()
    // },[])
    // console.log(wheather,'ssssssssssssssssssssssssss')
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
            {value&&<Typography variant='p'>Dyanamic Home page route:-{value}</Typography>}
            {/* {wheather&&<Typography variant='p'>Dyanamic Home page route:-{wheather.pressure}</Typography>} */}

          {wheather&&(
            <Box>
              <Typography variant='p'>pressure:-{wheather?.pressure}</Typography><br/>
              <Typography variant='p'>temp:-{wheather?.temp}</Typography><br/>
              <Typography variant='p'>humidity:-{wheather?.humidity}</Typography>
            </Box>
          )}
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
