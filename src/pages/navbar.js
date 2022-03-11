import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'


const Navbar = () => {

	return (
		<ButtonGroup aria-label="Basic example">
			<Button variant="secondary"><AiOutlineHome /></Button>
			<Button variant="secondary"><AiOutlineMail /></Button>
			<Button variant="secondary"><AiOutlineUser /></Button>
		</ButtonGroup>
	)
}

export default Navbar