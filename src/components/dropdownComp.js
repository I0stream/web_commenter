import { CgMenu } from "react-icons/cg"
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


const dropDownComp = (props) => {
    
return (
    <div className='user-settings'>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <CgMenu 
                style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
                />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
    </div>
    )
}
export default dropDownComp