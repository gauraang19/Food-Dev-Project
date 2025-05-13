import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import Header from '../../components/Header/Header';
import axios from 'axios'; 

const MyOrders = () => {

    const{url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{Headers:{token}});
        setData(response.data.data);
        
    }

    useEffect(()=>{
      if(token){
        fetchOrders();
      }
    },[token]) 


  return (
    <div>
      
    </div>
  )
}

export default MyOrders
