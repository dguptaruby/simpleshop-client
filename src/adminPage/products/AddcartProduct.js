import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'
import Header from '../../Header/Header'

function AddcartProduct() {
    const history = useHistory()
    const location = useLocation()

    const value = location.state.value
    const token = localStorage.getItem('token')


    const [customer_name, setcustomer_name] = useState()
    const [shipping_address, setshipping_address] = useState()

    const handleToken = ({ token1, addresses }) => {
        axios.post(`${process.env.REACT_APP_LINK}/orders`,
            {
                customer_name: customer_name,
                shipping_address: shipping_address,
                paid_at: new Date(),
                order_total: value.price
            },
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res=>history.push('/order'))
            .catch(err=>console.log(err))
    }
    return (
        <div className="container">
            <Header />
            <label>Customer Name</label>
            <input placeholder="Enter your name" onChange={(e) => setcustomer_name(e.target.value)} />
            <label>Address</label>
            <input placeholder="Enter shipping address" onChange={(e) => setshipping_address(e.target.value)} />
            <h5 className="mt-4">Product detail:</h5>
            <Card style={{ width: '18rem' }} className="mt-4">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                        {value.description}
                    </Card.Text>

                </Card.Body>
            </Card>
            <div className="mt-2">
                <StripeCheckout
                    stripeKey="pk_test_51JjayBSEJSjz4vkycEAg6R5YaSnxBfJso95pVnu0oY9YUs64Q8Gln7MvNx2w8SutlFo7MGJDO53CgPhCY6ld4NWJ00vGW1U1Qn"
                    token={handleToken}

                />
            </div>
        </div>
    )
}

export default AddcartProduct
