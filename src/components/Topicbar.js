import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Topicbar = (props) => {
	const myCurrentWebsite = props.websiteName
	const topicTitle = props.testTopicName

	
	const setPrimary = (e) => {
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
			<ListGroup>
			  <ListGroup.Item action onClick={setPrimary} href="#link1">{topicTitle}</ListGroup.Item>
			  <ListGroup.Item action onClick={setPrimary} href="#link1">Dapibus ac facilisis in</ListGroup.Item>
			  <ListGroup.Item action href="#link1">Morbi leo risus</ListGroup.Item>
			  <ListGroup.Item action href="#link1">Porta ac consectetur ac</ListGroup.Item>
			  <ListGroup.Item action href="#link1">Vestibulum at eros</ListGroup.Item>
			</ListGroup>
		</div>
	)
}

export default Topicbar