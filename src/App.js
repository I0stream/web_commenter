import './App.css';

import Navbar from './pages/navbar'
import MainTopicView from './components/MainTopicView'
import Topicbar from './components/Topicbar'


function App() {
  return (
    <div className="App">
        <div className="TopicAndNavBar">
            <Topicbar />
            <Navbar />
        </div>
        <MainTopicView />
    </div>
  );
}

export default App;
