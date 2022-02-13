import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const Navbar = () => {

	return (
		<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
			<Tab eventKey="home" title="Home">
			</Tab>
			<Tab eventKey="profile" title="Profile">
			</Tab>
			<Tab eventKey="contact" title="Messages" >
			</Tab>
		</Tabs>
	)
}

export default Navbar