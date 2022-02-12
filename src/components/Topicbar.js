import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Topicbar = (props) => {
	const myCurrentWebsite = props.websiteName
	const topicTitle = props.testTopicName

	const alertClicked = () => {
		console.log("clicked topic")
	}

	return (
		<div className='Topic-bar'>
			<h2>{myCurrentWebsite}</h2>
			<input 
				type="text"
				value="Search"
				onChange={e => this.props.propsSearchKeyword(e.target.value)}
			/>
			<button>New Topic +</button>
			<ListGroup as="ul">
			  <ListGroup.Item as="li" action onClick={alertClicked} active>Cras justo odio</ListGroup.Item>
			  <ListGroup.Item as="li" action onClick={alertClicked}>Dapibus ac facilisis in</ListGroup.Item>
			  <ListGroup.Item as="li" action onClick={alertClicked}>Morbi leo risus</ListGroup.Item>
			  <ListGroup.Item as="li" action onClick={alertClicked}>Porta ac consectetur ac</ListGroup.Item>
			  <ListGroup.Item as="li" action onClick={alertClicked}>Vestibulum at eros</ListGroup.Item>
			</ListGroup>
		</div>
	)
}

export default Topicbar