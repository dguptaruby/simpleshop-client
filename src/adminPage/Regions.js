import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Regions() {
    return (<>
        <Form className="add-region-page container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter region name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter country name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Currency</Form.Label>
                <Form.Control type="text" placeholder="Enter currency name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tax</Form.Label>
                <Form.Control type="percentage" placeholder="Enter tax " />

            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
    )
}

export default Regions
