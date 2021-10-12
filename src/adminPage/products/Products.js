import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'
import Header from '../../Header/Header'
import Select from 'react-select'
import countryList from 'react-select-country-list'


function Products() {
    const history = useHistory()
    const token = localStorage.getItem('token')
    const [productdata, setProductdata] = useState()
  
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK}/products`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                setProductdata(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])
   
    const removeOrder = (id) => {

        console.log('coming ...', id)
        axios.delete(`${process.env.REACT_APP_LINK}/${id}`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    console.log(productdata)
    const handleToken = ({token,addresses}) =>{
        console.log({token,addresses})
    }   
    return (
        <div className="container">
            <Header />
            <Row className="mt-5">
                {productdata && productdata.map((value, index) => {
                    return <Col sm={4} md={3}>
                        <Card style={{ width: '18rem', }} className="mb-2">
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.description}
                                </Card.Text>
                                <StripeCheckout
                                stripeKey = "pk_test_51JjayBSEJSjz4vkycEAg6R5YaSnxBfJso95pVnu0oY9YUs64Q8Gln7MvNx2w8SutlFo7MGJDO53CgPhCY6ld4NWJ00vGW1U1Qn"
                                token={handleToken}
                                />
                                {/* <Button variant="primary" onClick={() => history.push({
                                    pathname: "/editorder",
                                    state: {  // location state
                                        value: value,
                                    },
                                })}>Buy</Button> */}

                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default Products
