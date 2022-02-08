import './App.css';
import React, { useState } from 'react'

import Navbar from './pages/navbar'
import MainTopicView from './components/MainTopicView'
import Topicbar from './components/Topicbar'
import { v4 as uuidv4 } from "uuid";


function App() {
    const [comments, setComments] = useState(
    [{
        uuid: 1,
        commentText: "blah blah blah blah blah blah blah blah blah blah ",
        commentPoster: "giga chad",
        timeposted: Date(),
        repliedTo: "",
        reported: [],

    },{
        uuid: 2,
        commentText: "commentText",
        commentPoster: "giga wojak",
        timeposted: Date(),
        repliedTo: 1,
        reported: []
    },{
        uuid: 3,
        commentText: "friends",
        commentPoster: "apu",
        timeposted: Date(),
        repliedTo: "",
        reported: []
    }]
        )
    

    //get current website here and load topics and comments then populate
    const currentWebsite = window.location.host

    const websiteForum = {
        uuid: "google.com",
        topics: [],
        mods: []
    }

    const myTopic = {
        uuid: 1,
        topicName: "test topic" ,
        description: "this is a test topic",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    }    


    const user = {
        userUUID: "",
        username: "fred",
        commentids: []
    } 


    const addComment = commentText => {
        const newComment = {
            uuid: uuidv4,
        commentText: commentText,
        commentPoster: user.username,
        timeposted: Date(),
        repliedTo: "",
        reported: [],
        }
        setComments([...comments, newComment])
    }
    const searchKeyword = (keyword) => {
        console.log("searched")
    }

        function getInitialComments() {
        // getting stored items
        const temp = localStorage.getItem("comments")
        const savedComments = JSON.parse(temp)
        return savedComments || []
    }

  return (
    <div className="App">
        <div className="TopicAndNavBar">
            <Topicbar 
                testTopicName={myTopic.topicName}
                websiteName={currentWebsite} 
                propsSearchKeyword={searchKeyword}
            />
            <Navbar />
        </div>
        <MainTopicView 
            posterTopic={myTopic} 
            userComments={comments} 
            addCommentProps={addComment}
        />
    </div>
  );
}

export default App;
