"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import Popup from "@/Component/Popup/Popup";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { home: string } }) => {
  const [data, setData] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  },[open]);
  
if(typeof parseInt(params.home)!=='number'){
   return notFound()
}
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
            Show Dyanmic route
          </Button>
          <Popup open={open} handleClose={handleClose}  value={params?.home}/>
    </div>
  );
};

export default page;
