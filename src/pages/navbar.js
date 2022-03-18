import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'


const Navbar = (props) => {

	return (
		<ButtonGroup aria-label="Basic example">
			<Button variant="secondary"
				onClick={props.navigate("topics")}
				><AiOutlineHome /></Button>
			<Button variant="secondary"
				onClick={props.navigate("chat")}
				><AiOutlineMail /></Button>
			<Button variant="secondary"
				onClick={props.navigate("mail")}
			><AiOutlineUser /></Button>
		</ButtonGroup>
	)
}

export default Navbar