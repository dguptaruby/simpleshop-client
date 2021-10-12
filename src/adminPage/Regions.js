import axios from 'axios'
import React, { useMemo, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Regions() {
    const [regionname, setRegionname] = useState()
    const [currency, setCurrency] = useState()
    const [value, setValue] = useState('')
    const [tax, settax] = useState()
    const token = localStorage.getItem('token')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_LINK}/regions`,
            {
                title: regionname,
                country: value,
                currency: currency,
                tax: tax
            }, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const changeHandler = value => {
        const countrycode = value.value
        console.log(countrycode,"",value.value)
        setValue(countrycode)
    }
    const options = useMemo(() => countryList().getData(), [])
    console.log(value)
    return (
        <>
            <Form className="add-region-page container">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter region name" onChange={(e) => setRegionname(e.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country</Form.Label>

                    <Select options={options} value={value} onChange={changeHandler} />

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Currency</Form.Label>
                    <Form.Control type="text" placeholder="Enter currency name" onChange={(e) => setCurrency(e.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tax</Form.Label>
                    <Form.Control type="percentage" placeholder="Enter tax" onChange={(e) => settax(e.target.value)} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Regions
