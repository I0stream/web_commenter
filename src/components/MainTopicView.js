import React from 'react'
import Comment from './Comment'


const MainTopicView = (props) => {
	const myTopic = props.posterTopic
	const myComments = props.userComments

	return (
		<div className='MainTopicView'>
			<div className='head'>
				<h2 className='current-topic'> {myTopic.topicName}</h2>

				<div className='topic-description'>{myTopic.description}</div>
				<div className="reply px-4"> <small>Reply to post</small> </div>

			</div>
			
			<ul className="comment-ul">

			{myComments.map(comment => (
	      		<Comment 
	      			key={comment.uuid}
	      			userComment={comment}
	      		/>
	    		))}
			</ul>
			
		</div>
	)
}

export default MainTopicView