import React from 'react'

const Comment = (props) => {

	const { commentText, commentPoster, repliedTo, timePosted } = props.userComment

	return (
		<div className='Comment  cards'>
		<img src="#" alt="profile picture" className="icons" />
		<h4>{commentPoster}</h4>
		<p>{timePosted}</p>
		<p>{commentText}</p>
		</div>


	)
}

export default Comment