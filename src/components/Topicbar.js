import React from 'react'

const Topicbar = (props) => {
	const myCurrentWebsite = props.websiteName
	const topicTitle = props.testTopicName

	return (
		<div className='Topic-bar'>
			<h2>{myCurrentWebsite}</h2>
			<input 
				type="text"
				value="Search"
				onChange={() => this.props.propsSearchKeyword()}
			/>
			<button>New Topic +</button>
			<ul><li>{topicTitle}</li></ul>
		</div>
	)
}

export default Topicbar