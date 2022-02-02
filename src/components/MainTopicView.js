import React from 'react'
import Comment from './Comment'
import MessageField from './MessageField'

const MainTopicView = (props) => {

	return (
		<div className='MainTopicView'>
			<div className='current-topic'> {props.posterTopic.topicName} <div>User/settings</div></div>
			<div>{props.posterTopic.description}</div>
			<Comment userComment={this.props.userComments} />
			<MessageField addCommentProps={this.props.addCommentProps}/>
		</div>
	)
}

export default MainTopicView