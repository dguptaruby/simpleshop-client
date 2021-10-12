import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Header from '../../Header/Header'


function Products() {
    const history = useHistory()
    const token = localStorage.getItem('token')
    const [productdata, setProductdata] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK}/products`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                setProductdata(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeOrder = (id) => {

        axios.delete(`${process.env.REACT_APP_LINK}/${id}`,
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
            <Row className="mt-5">
                {productdata && productdata.map((value, index) => {
                    return <Col sm={4} md={3} key={index} >
                        <Card style={{ width: '18rem', }} className="mb-2">
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                   desc: {value.description}
                                </Card.Text>
                                <Card.Text>
                                    price:{value.price}
                                </Card.Text>
                               
                               
                                <Button variant="primary" onClick={() => history.push({
                                    pathname: "/Addcartproduct",
                                    state: {  // location state
                                        value: value,
                                    },
                                })}>Buy</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default Products
