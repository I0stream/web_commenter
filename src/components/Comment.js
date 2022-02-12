import React from 'react'
import '../comment.css'

const Comment = (props) => {
	//https://bbbootstrap.com/snippets/bootstrap-comments-list-font-awesome-icons-and-toggle-button-91650380
	const { commentText, commentPoster, repliedTo, timePosted } = props.userComment

	return (
		<div className='Comment  card p-3'>
			<div className="d-flex justify-content-between align-items-center">
                    <div className="user d-flex flex-row align-items-center">
	                    <img src="#" alt="profile picture " width="30" className="user-img rounded-circle mr-2" /> 
	                    <span>
	                    	<small className="font-weight-bold text-primary">{commentPoster}</small>
	                    	                    <small>{timePosted}</small>
	                    	<small className="font-weight-bold"><p>{commentText}</p></small>
	                    </span>
                    </div>

                </div>
                <div className="action d-flex justify-content-between mt-2 align-items-center">
                    <div className="reply px-4"> <small>Reply</small> </div>
                    <div className="icons align-items-center"> <i className="fa fa-star text-warning"></i> <i className="fa fa-check-circle-o check-icon"></i> </div>
                </div>
		</div>


	)
}

export default Comment