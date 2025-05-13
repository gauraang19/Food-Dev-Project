import React, { useContext, useEffect,useState } from 'react'
import './Verify.css'   
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const {url} = useContext(StoreContext); 
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
  
      // Check if the response indicates success
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      navigate("/"); // Optionally navigate on error
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  };
  
  useEffect(()=>{
    verifyPayment();
  },[])


  return (
    <div className='verify'>
      <div className="spinner">

      </div>
    </div>
  )
}

export default Verify
