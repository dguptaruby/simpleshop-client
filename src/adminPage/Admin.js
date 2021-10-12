import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function Admin() {
    const history = useHistory()

    return (
        <div className="admine-era">
            <Button className="primary" style={{display:"block"}} onClick={()=>history.push('/admin-region')}>Regions</Button>
            <Button className="success" style={{display:"block"}} onClick={()=>history.push('/admin-product')}>Products</Button>
        </div>
    )
}

export default Admin
