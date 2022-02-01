import React from 'react'
import Comment from './Comment'
import MessageField from './MessageField'

const MainTopicView = () => {

	return (
		<div className='MainTopicView'>
			<div className='current-topic'>current topic         User/settings</div>
			<Comment />
			<MessageField />
		</div>
	)
}

export default MainTopicView