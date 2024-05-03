'use client'
import axios from "axios";


export const getCityLatLon=async(city:{city:string})=>{
 
    try {
        const res=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=5912648dc356a2f7b1db3534e152d6bf`)
     
        return res
    } catch (error) {
       
        throw error
    }
}

export const getCityWheather=async(data:{data:any})=>{
 console.log(data,'aspp')
    try {
        const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data?.lat}&lon=${data?.lon}&appid=5912648dc356a2f7b1db3534e152d6bf`)
     
        return res
    } catch (error) {
       
        throw error
    }
}