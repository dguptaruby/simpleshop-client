import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Header from '../../Header/Header'

function Products() {
    const history = useHistory()
    var order = []
    const token = localStorage.getItem('token')
    var [customer_name, setcustomer_name] = useState()
    const [orderdata, setOrderdata] = useState()
    customer_name = 'chhatrapal'
    order.customer_name = customer_name
    // order.shipping_address = "112 new york street america"
    // order.paid_at = 12/12/2020
    // order.order_total = 2000

    axios.post('http://b5ac-103-136-92-221.ngrok.io/orders',
        {
            customer_name: order.customer_name,
            // shipping_address:order.shipping_address,
            // paid_at:order.paid_at,
            // order_total:order.order_total
        },
        { headers: { "Authorization": `Bearer ${token}` } })

    useEffect(() => {
        axios.get('https://0118-103-136-92-221.ngrok.io/    orders',
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                setOrderdata(res.data)
            })  
            .catch(err => console.log(err))
    }, [])

    const removeOrder = (id) => {

        console.log('coming ...', id)
        axios.delete(`https://0118-103-136-92-221.ngrok.io//orders/${id}`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                console.log(res)
                // window.location.reload()
            })
            .catch(err => console.log(err))
    }
    console.log(orderdata)
    return (
        <div className="container">
            <Header />
            <Row className="mt-5">
                {orderdata && orderdata.map((value, index) => {
                    return <Col sm={4} md={3}><Card style={{ width: '18rem', }} className="mb-2">
                        <Card.Body>
                            <Card.Title>{value.customer_name}</Card.Title>
                            <Card.Text>
                                shipping at : {value.shipping_address}
                            </Card.Text>
                            <Button variant="primary" onClick={() => { removeOrder(value.id) }}>Remove</Button>
                            <Button variant=" ml-5 primary" onClick={() => history.push('/')}>Edit</Button>

                        </Card.Body>
                    </Card>
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default Products
