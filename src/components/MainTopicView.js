import React from 'react'
import Comment from './Comment'
import MessageField from './MessageField'

const MainTopicView = (props) => {
	const myTopic = props.posterTopic
	const myComments = props.userComments

	return (
		<div className='MainTopicView'>
			<div className='head'>
				<h3 className='current-topic'> {myTopic.topicName}</h3>
				<div className='user-settings'>User/settings</div>
			</div>
			<div className='topic-description'>{myTopic.description}</div>
			<ul>
			{myComments.map(myComments => (
	      		<Comment 
	      			userComment={myComments} 
	      		/>
	    		))}
			</ul>
			<MessageField addCommentProps={props.addCommentProps}/>
		</div>
	)
}

export default MainTopicView