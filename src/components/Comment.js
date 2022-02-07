import React from 'react'

const Comment = (props) => {

	const { uuid, commentText, commentPoster, repliedTo, reported } = props.comment



	if (repliedTo === ""){
		console.log("do nothing")
	} else {
		console.log("sub to a comment")
	}


	return (
		<div className='Comment'>

		<p>{commentText}</p>
		<h4>{commentPoster}</h4>

		</div>


	)
}

export default Comment