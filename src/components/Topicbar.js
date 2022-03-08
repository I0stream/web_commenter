import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Topicbar = (props) => {
	const myCurrentWebsite = props.websiteName
	const topicTitle = props.testTopicName

	const setPrimary = (e) => {
		ListGroup.Item.active = false
		e.active = true

	}
	


	return (
		<div className='Topic-bar'>
			<h2>{myCurrentWebsite}</h2>
			<div style={{display:'flex'}}>
				<input 
					type="text"
					value="Search"
					onChange={e => this.props.propsSearchKeyword(e.target.value)}
				/>
				<button>New Topic +</button>
			</div>
			<ListGroup as="ul">
			  <ListGroup.Item as="li" action onClick={setPrimary} variant="primary" role="tab" >{topicTitle}</ListGroup.Item>
			  <ListGroup.Item as="li" action onClick={setPrimary}>Dapibus ac facilisis in</ListGroup.Item>
			  <ListGroup.Item as="li" action>Morbi leo risus</ListGroup.Item>
			  <ListGroup.Item as="li" action>Porta ac consectetur ac</ListGroup.Item>
			  <ListGroup.Item as="li" action>Vestibulum at eros</ListGroup.Item>
			</ListGroup>
		</div>
	)
}

export default Topicbar