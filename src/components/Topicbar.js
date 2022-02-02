import React from 'react'

const Topicbar = (props) => {

	return (
		<div className='Topic-bar'>
			<h2>{props.websiteName}</h2>
			<input 
				type="text"
				value="Search"
				onChange={this.props.SearchKeyword()}
			/>
			<button>New Topic +</button>
			<ul><li>{props.testTopicName}</li></ul>
		</div>
	)
}

export default Topicbar