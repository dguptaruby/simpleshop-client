import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../Header/Header'
function AllOrder() {
    const history = useHistory()
    const token = localStorage.getItem('token')
    const [orderdata, setOrderdata] = useState()

    const user = useSelector(state => state)
    
    useEffect(() => {

            axios.get(`${process.env.REACT_APP_LINK}/orders`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                console.log(token)
                setOrderdata(res.data)
            })  
            .catch(err => history.push('/signin'))
      
    }, [])

    const removeOrder = (id) => {
        
        axios.delete(`${process.env.REACT_APP_LINK}/orders/${id}`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
        }
    return (

        <div className="container">
        <Header />
        <h1 className="mt-5" style={{fontFamily:"poppins-regular"}}>Your orders are</h1>
        <Row className="mt-5">
            {
            orderdata && orderdata.map((value, index) => {
                return <Col sm={4} md={3} key={index}><Card key={index} style={{ width: '18rem', }} className="mb-2">
                    <Card.Body>
                        <Card.Title>{value.customer_name}</Card.Title>
                        <Card.Text>
                            shipping at : {value.shipping_address}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { removeOrder(value.id) }}>Cancel</Button>
                        <Button variant=" ml-5 primary" onClick={() => history.push({
                            pathname:"/editorder",
                            state: {  // location state
                                value: value, 
                              },
                        })}>Edit</Button>

                    </Card.Body>
                </Card>
                </Col>
            })
            }
        </Row>
    </div>
        
    )
}

export default AllOrder
