import React from 'react'

const MessageField = (props) => {

	return (
		<div className='MessageField'>
			<input 
				type="text"
				value="Write a comment"
				onChange={() => this.props.addCommentsProps("")}
			/>
		</div>
	)
}

export default MessageField