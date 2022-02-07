import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa"
const MessageField = (props) => {

	const [inputText, setInputText] = useState(
	{
		title: "",
	})

	const onChange = e => {
		setInputText({
			...inputText,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = e => {
		e.preventDefault()
		//trim removes whitespace 
		if (inputText.title.trim()){
			props.addCommentProps(inputText.title)
			setInputText({
				title: "",
			})
		} else {
			alert("Please write item")
		}
	}

	return (
				<form onSubmit={this.handleSubmit} className='MessageField'>
			<input 
				className="mF"
				type="text"
				placeholder="Add Todo..." 
				value={inputText} 
				name="title"
				onChange={onChange}
			/><button className="input-submit">
			<FaPlusCircle 
			    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
			/>
			</button>

		</form>
	)
}

export default MessageField