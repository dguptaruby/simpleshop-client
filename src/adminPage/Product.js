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
    const [options, setoptions] = useState([])
    const [selectedregion, setselectedregion] = useState()
    const token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_LINK}/products`,
            {   
                title:title,
                image_url: image,
                description: description,
                price: price,
                sku: sku,
                stocks: stocks,
                region_id: selectedregion.value
            },
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        var newarr = []
        axios.get(`${process.env.REACT_APP_LINK}/regions`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                const regionData = res.data 
                setoptions(regionData)
             
                
            })
            .catch(err => console.log(err))
            
    }, [])

    const changeHandler = value =>{
        setselectedregion(value)
    }   
    console.log(selectedregion)
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
                <Select options={options.map(el => ({value: el.id, label: el.title}))}  onChange={changeHandler} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
             
        

            </Form>
          
        </div>
    )
}

export default AddProduct
