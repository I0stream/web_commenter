import React from 'react'

const Comment = (props) => {

	const { commentText, commentPoster, repliedTo, timePosted } = props.userComment

	return (
		<div className='Comment'>
		<h4>{commentPoster}</h4>
		<p>{commentText}</p>
		<p>{timePosted}</p>
		</div>


	)
}

export default Comment