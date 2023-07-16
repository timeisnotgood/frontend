import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios, { Axios } from 'axios'
import ProductComponent from './productComponent';
import { setproduct } from '../Redux/actions/performAction';

export default function ProductList() {
    const dispatch = useDispatch();
    
    const fetchproducts = async() =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => console.log("error", err));

        dispatch(setproduct(response.data));
    }


    useEffect(()=>{
        fetchproducts();
    },[])

  return (
    <div className='ui grid container' >
        <ProductComponent/>
    </div>
  )
}
