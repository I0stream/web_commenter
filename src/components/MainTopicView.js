import React from 'react'
import Comment from './Comment'
import MessageField from './MessageField'


const MainTopicView = (props) => {
	const myTopic = props.posterTopic
	const myComments = props.userComments

	return (
		<div className='MainTopicView'>
			<div className='head'>
				<h2 className='current-topic'> {myTopic.topicName}</h2>

				<div className='topic-description'>{myTopic.description}</div>
			</div>
			
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