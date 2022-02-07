import React from 'react'

const Comment = (props) => {

	const { key, text, commentPoster, repliedTo, reported } = props.userComment

	return (
		<div className='Comment'>
		<p>{console.log(props.userComment)}</p>
		<p>{text}</p>
		<h4>{commentPoster}</h4>

		</div>


	)
}

export default Comment