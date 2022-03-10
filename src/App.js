import './App.css';
import React, { useState } from 'react'

import Navbar from './pages/navbar'
import MainTopicView from './components/MainTopicView'
import Topicbar from './components/Topicbar'
import { v4 as uuidv4 } from "uuid";


function App() {

        //get current website here and load topics and comments then populate
        const currentWebsite = window.location.host

        const websiteForum = {
            uuid: "google.com",
            topics: [],
            mods: []
        }
    
    //store pic in one place and only reference it with the comment/user obj
    const [comments, setComments] = useState(
    [{
        uuid: 1,
        commentText: "blah blah blah blah blah blah blah blah blah blah ",
        commentPoster: "giga chad",
        timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
        children: [],
        reported: [],
        profilePic: "../public/test-profile-pics/p1.jpg"

    },{
        uuid: 2,
        commentText: "commentText",
        commentPoster: "giga wojak",
        timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
        children: [],
        reported: [],
        profilePic: "../public/test-profile-pics/p1.jpg"

    },{
        uuid: 3,
        commentText: "friends",
        commentPoster: "apu",
        timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
        children: [
            {
            uuid: 4,
            commentText: "reply",
            commentPoster: "apu",
            timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
            children: [],
            reported: [],        
            profilePic: "../public/test-profile-pics/p1.jpg"
        }],
        reported: [],
        profilePic: "../public/test-profile-pics/p1.jpg"

    }]
        )
    const myTopics = [{
        uuid: 1,
        topicName: "test 1" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    },{
        uuid: 2,
        topicName: "test 2" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    },{
        uuid: 3,
        topicName: "test 3" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    },{
        uuid: 4,
        topicName: "test 4" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    },{
        uuid: 5,
        topicName: "test 5" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    },{
        uuid: 6,
        topicName: "test 6" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentUUIDs: ["1", "2"],
        poster: "chad",
        reported: [],

    },]    

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

    const onSelectTopic = (uuid) =>{
        //recieve uuid of selected topic
        //update main topic view
    }

  return (
    <div className="App">
        <div className="TopicAndNavBar">
            <Topicbar 
                testTopics={myTopics}
                websiteName={currentWebsite} 
                propsSearchKeyword={searchKeyword}
            />
            <Navbar />
        </div>
        <MainTopicView 
            posterTopic={myTopics[0]} 
            userComments={comments} 
            addCommentProps={addComment}
        />
    </div>
  );
}

export default App;
