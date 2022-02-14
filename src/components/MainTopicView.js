import React from 'react'
import Comment from './Comment'
import MessageField from './MessageField'
import { CgMenu } from "react-icons/cg"
import Dropdown from 'react-bootstrap/Dropdown'

const MainTopicView = (props) => {
	const myTopic = props.posterTopic
	const myComments = props.userComments



	return (
		<div className='MainTopicView'>
			<div className='head'>
				<h3 className='current-topic'> {myTopic.topicName}</h3>
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
			</div>
			<div className='topic-description'>{myTopic.description}</div>
			<div>{console.log(myComments)}</div>
			<ul className="comment-ul">

			{myComments.map(comment => (
	      		<Comment 
	      			key={comment.uuid}
	      			userComment={comment}
	      		/>
	    		))}
			</ul>
			<MessageField addCommentProps={props.addCommentProps}/>
		</div>
	)
}

export default MainTopicView