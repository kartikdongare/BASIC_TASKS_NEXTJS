"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import Popup from "@/Component/Popup/popup";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { home: string } }) => {
  const [data, setData] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const getdata= async() => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=10");
        setData(res.data.products);
      } catch (error) {
        if(error){
           return notFound()
        }
      }
    };
    getdata()
  }, []);
//   console.log(data);
if(typeof parseInt(params.home)!=='number'){
   return notFound()
}
  return (
    <div>
      Home page No:{params.home}
      {/* <div> */}
      {data&&data?.map((ele: any) => (
        <div key={ele.id}>
          {/* {(ele, "eleess")} */}
          <p>Brand:-{ele.brand}</p>
          <Button variant="outlined" onClick={handleClickOpen}>
            show more deatils
          </Button>
          <Popup open={open} handleClose={handleClose} ele={ele} />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default page;
