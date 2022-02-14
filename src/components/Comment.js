import React from 'react'
import '../comment.css'


//https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children
//above link is genius
const Comment = (props) => {
	//https://bbbootstrap.com/snippets/bootstrap-comments-list-font-awesome-icons-and-toggle-button-91650380
	const { commentText, commentPoster, repliedTo, timePosted, children, uuid, profilePic } = props.userComment

	const nestedComments = (children || []).map(comment => {
    	return <Comment key={uuid} userComment={comment} type="child" /> 
  	})

	return (

		<div className='Comment  card p-3'>
			<div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                    <img src={profilePic} alt="profile" width="30" className="user-img rounded-circle mr-2" /> 
                    <span>
                    	<small className="font-weight-bold text-primary">{commentPoster}</small>
                    	                    <small>{timePosted}</small>
                    	<small className="font-weight-bold"><p>{commentText}</p></small>
                    </span>
                </div>

            </div>
            <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4"> <small>Reply</small> </div>
            </div>
			<div className="children">{nestedComments}</div>
		</div>
	)
}

export default Comment