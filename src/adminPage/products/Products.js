import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Header from '../../Header/Header'

function Products() {
    const history = useHistory()
    const token = localStorage.getItem('token')
    const [orderdata, setOrderdata] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK}/orders`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                setOrderdata(res.data)
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
                            <Button variant=" ml-5 primary" onClick={() => history.push({
                                pathname:"/editorder",
                                state: {  // location state
                                    value: value, 
                                  },
                            })}>Edit</Button>

                        </Card.Body>
                    </Card>
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default Products