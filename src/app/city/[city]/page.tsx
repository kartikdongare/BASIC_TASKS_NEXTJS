'use client'
import React, { useCallback, useEffect, useState } from 'react'
import {getCityLatLon} from '../../../Api';
import Popup from '@/Component/Popup/Popup';
import { Button } from '@mui/material';

const page = ({params}:{params:{city:string}}) => {
    const [loading,setLoading]=useState<boolean>(false)
    const [error,setError]=useState<boolean>(false)
    const [data,setData]=useState<any>(['']);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = useCallback(() => {
      setOpen(false);
    },[open]);
    useEffect(()=>{
        (async()=>{
            setLoading(true)
          try {
              const res=await getCityLatLon(params.city);
              console.log(res.data,'ghytfc')
              setData(res.data)
              setLoading(false)
          } catch (error) {
            setLoading(false)
            setError(true)
          }
        })()
    },[])
    
  return (
    <div>
        {loading&&(
            <div>
        <h1>...City Data fetching please wait</h1>
     </div>
        )}
        {error&&(
            <h1>Something went wrong</h1>
        )}
       {data&&(
        <div>
            <p>City Name:-{params?.city}</p>
            <Button variant="outlined" onClick={handleClickOpen}>
             City wheather
          </Button>
          {/* {data&& */}
          <Popup open={open} handleClose={handleClose}  data={data[3]}/>
          {/* } */}
        </div>
       )}
    </div>
  )
}

export default page
