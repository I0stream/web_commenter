import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Topicbar = (props) => {
	const myCurrentWebsite = props.websiteName
	const topics = props.testTopics

	return (
		<div className='Topic-bar'>
			<h2 className='website_name'>{myCurrentWebsite}</h2>
			<div style={{display:'flex'}}>
				<button>New Topic +</button>
			</div>
			<ListGroup as="ul" id="list-group-tabs">
				{topics.map(topic => (
					<ListGroup.Item 
					key={topic.uuid} 
					action 
					onClick={() => props.onSelectTopic(topic.uuid)}
					>
						{topic.topicName}</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	)
}

export default Topicbar