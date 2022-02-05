import React from 'react'

const Comment = (props) => {

	const { uuid, commentText, commentPoster, repliedTo, reported } = props.comment


	return (
		<div className='Comment'>{commentText}</div>)
}

export default Comment