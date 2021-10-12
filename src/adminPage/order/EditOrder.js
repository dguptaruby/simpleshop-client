import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Header from '../../Header/Header';

function EditOrder() {
    const token = localStorage.getItem('token')
    const [shippingAddress, setShippingAddress] = useState()

    const location = useLocation();
    const history = useHistory()
    const value = location.state.value
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_LINK}/orders/${value.id}`
        ,
        {
            customer_name:value.customer_name,
            shipping_address:shippingAddress,
            order_total:value.order_total,
            paid_at:value.paid_at
        }
            ,{ headers: { "Authorization": `Bearer ${token}` } })
        .then(res=>
            history.push('/order'))
        .catch(err=>console.log(err))

    }
    console.log(shippingAddress)
    return (
        <div className="container">
            <Header />
        <div className="mt-4">
            customer_name : {value.customer_name}
            <label className="fw-900">Shipping_address:</label>
            <input type="text" placeholder={value.shipping_address}  onChange={(e)=>setShippingAddress(e.target.value)}/>
            <p className="mt-2">paid at : {value.paid_at}</p>
            <p>order_total : {value.order_total}</p>
            <button className="primary" onClick={handleSubmit}>Change</button>

        </div>
        </div>
    )
}

export default EditOrder
