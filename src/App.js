import './App.css';
import React, { useState } from 'react'

import MessageField from './components/MessageField'
import Navbar from './pages/navbar'
import MainTopicView from './components/MainTopicView'
import Topicbar from './components/Topicbar'
import { v4 as uuidv4 } from "uuid";


function App() {
    let data = new initalData()

    //set a bunch of chit, there will be a lot of blank websites so probably set some instructions in them
    
    //get current website here and load topics and comments then populate
    const currentWebsite = window.location.host
    const [topics, setTopics] = useState(data.myTopics)
    const [selection, setSelection] = useState(data.myTopics[0])
    const [comments, setComments] = useState(data.comms)
    const [topicComments, setTopicComments] = useState(comments.filter(
        function(comment) {return comment.topicuuid === data.myTopics[0].uuid}
    ))
    

    function setall(){
        //setTopics(...topics, newTopic)
        setTopics(data.myTopics)
        setSelection(data.myTopics[0])
        setComments(data.comms)
    }
    
    
    const user = {
        userUUID: "",
        username: "fred",
        commentids: []
    } 

    function getInitialTopics() {
        // getting stored items
        const temp = localStorage.getItem("topics")
        let savedTopics = JSON.parse(temp)
        if (savedTopics){
            console.log(data.myTopics)
            return data.myTopics
        }
        return savedTopics
    }

    function getInitialComments() {
        // getting stored items
        const temp = localStorage.getItem("comments")
        let savedComments = JSON.parse(temp)
        if (savedComments){
            console.log(data.comms)
            return data.comms
        }
        return savedComments || []
    }

    function getInitialSelection() {
        // getting stored items
        const temp = localStorage.getItem("selection")
        let savedSelection = JSON.parse(temp)

        if (savedSelection){
            return 0
        }
        return savedSelection 
    }

    const onSelectTopic = (uuid) =>{
        //recieve uuid of selected topic
        //update main topic view
        var sTopic  = topics.filter(
            function(topic) { return topic.uuid === uuid}
        )
        setSelection(sTopic[0])
        commentUpdateOnSelect(sTopic[0].uuid)
    }

    ///not working rn //////////////////////////////////////////////////////
    const commentUpdateOnSelect = (stopicUUid) => {
        console.log(stopicUUid)
        var stopicComments = comments.filter(
            function(comment) {return comment.topicuuid === stopicUUid}
        )
        setTopicComments(stopicComments)
    }

    const searchKeyword = (keyword) => {
        console.log("searched")
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
    const onSelectAddcomment = () =>{
        console.log(" comment add modal")
    }
    const addTopic = (topicTitle, topicDescription) => {
        console.log("add topic")
    }

    const navigate = myNavlink =>{
        console.log("nav to: ", myNavlink)
    }
    const onSelectAddTopic = () =>{
        console.log(" topic modal")
    }
  return (
    <div className="App">
        <div className="TopicAndNavBar">
            <Topicbar 
                testTopics={topics}
                websiteName={currentWebsite} 
                propsSearchKeyword={searchKeyword}
                onSelectTopic={onSelectTopic}
                onSelectAddTopic={onSelectAddTopic}

            />
            <Navbar
            className="navBottombar" 
            navigate={navigate}
            />
        </div>
        
        <MainTopicView 
            posterTopic={selection} 
            userComments={topicComments} 
        />
        <MessageField 
            addCommentProps={addComment}
            addtopicProps={addTopic}/>

        
    </div>
  );
}

export default App;

class initalData{

    comms = [{
        uuid: 1,
        topicuuid: 1,
        commentText: "blah blah blah blah blah blah blah blah blah blah ",
        commentPoster: "giga chad",
        timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
        children: [],
        reported: [],
        profilePic: "../public/test-profile-pics/p1.jpg"
    
    },{
        uuid: 2,
        topicuuid: 2,
        commentText: "commentText",
        commentPoster: "giga wojak",
        timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
        children: [],
        reported: [],
        profilePic: "../public/test-profile-pics/p1.jpg"
    
    },{
        uuid: 3,
        topicuuid: 3,
        commentText: "friends",
        commentPoster: "apu",
        timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
        children: [
            {
            uuid: 4,
            topicuuid: 3,
            commentText: "replykjlnjknkn",
            commentPoster: "apu",
            timePosted: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
            children: [],
            reported: [],        
            profilePic: "../public/test-profile-pics/p1.jpg"
        }],
        reported: [],
        profilePic: "../public/test-profile-pics/p1.jpg"
    
    }]
        myTopics = [{
            uuid: 1,
            topicName: "test 1" ,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
            poster: "chad",
            reported: [],
    
        },{
            uuid: 2,
            topicName: "test 2" ,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            poster: "chad",
            reported: [],
    
        },{
            uuid: 3,
            topicName: "test 3" ,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            poster: "chad",
            reported: [],
    
        },{
            uuid: 4,
            topicName: "test 4" ,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            poster: "chad",
            reported: [],
    
        },{
            uuid: 5,
            topicName: "test 5" ,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            poster: "chad",
            reported: [],
    
        },{
            uuid: 6,
            topicName: "test 6" ,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            poster: "chad",
            reported: [],
    
        },] 
    
};