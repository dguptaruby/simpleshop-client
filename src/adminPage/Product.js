import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Select from 'react-select'

function AddProduct() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [price, setPrice] = useState()
    const [sku, setSku] = useState()
    const [stocks, setStocks] = useState()
    const [region, setregion] = useState([])

    const token = localStorage.getItem('token')

    var options = []
    const handleSubmit = (e) => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNH0.PEAvplLI0Ohuyr5AE2m_xMEIRrb2UPXcI8V4SvA9dQ8'
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_LINK}/products`,
            {
                headers: { "Authorization": `Bearer ${token}` }, title: title,
                image_url: image,
                description: description,
                price: 111,
                sku: sku,
                stocks: stocks,
                order: 1,
                region: "thailand"
            })
    }

    useEffect(() => {
        const newarr = []
        console.log(typeof(newarr));
        axios.get(`${process.env.REACT_APP_LINK}/regions`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                const regionData = res.data 
                console.log(regionData)
                regionData.map((value1,index)=>{
                  return newarr.push(value1)
                })
                
            })
            .catch(err => console.log(err))
            setregion(newarr)
            options = newarr
            
    }, [])
    console.log("optin",options)
    console.log(typeof(region))
    // const options = [
    //     { value: 'admin', label: 'admin' },
    //     { value: 'user', label: 'user' },
    // ]
    return (
        <div className=" add-region-page container">
            <h1>Create your product</h1>
            <Form className=" ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)} type="text" placeholder="describe about product" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>select Image</Form.Label>
                    <Form.Control onChange={(e) => setImage(e.target.value)} type="file" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter price " />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sku</Form.Label>
                    <Form.Control onChange={(e) => setSku(e.target.value)} type="text" placeholder="Enter sku " />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Stocks</Form.Label>
                    <Form.Control onChange={(e) => setStocks(e.target.value)} type="number" placeholder="Number of Stocks " />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>region</Form.Label>
                <Select/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
             


            </Form>
          
        </div>
    )
}

export default AddProduct
