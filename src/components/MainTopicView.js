import React from 'react'
import Comment from './Comment'
import MessageField from './MessageField'

const MainTopicView = (props) => {
	const myTopic = props.posterTopic
	const Comments = props.userComments

	return (
		<div className='MainTopicView'>
			<div className='head'>
				<div className='current-topic'> {myTopic.topicName}</div>
				<div className='user-settings'>User/settings</div>
			</div>
			<div className='topic-description'>{myTopic.description}</div>
			<Comment userComment={Comments} />
			<MessageField addCommentProps={props.addCommentProps}/>
		</div>
	)
}

export default MainTopicView