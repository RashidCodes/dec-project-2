import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Tweet from './components/tweet';
import Architecture from './components/architecture';
import Tools from './components/tools';
import { embedDashboard } from "@superset-ui/embedded-sdk";
import Introduction from './components/introduction';
import Insights from './components/insights';
import Workflow from './components/workflow';
import CICD from './components/cicd';
import Code from './components/code';
import PreProd from './components/preprod';


function App() {

  const [recentTweets, setRecentTweets] = useState([])

  useEffect(() => {

    // get the most recent tweets
    const init = async () => {
      try {
        const response = await axios.get('/backend/recent_events')
        setRecentTweets([...response.data])
      } catch (error) {
        console.error(`An error occurred: ${error}`)
      }
    }

    init()

  }, [])


  const fetchGuestTokenFromBackend = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: '/backend/access',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.data.token
    } catch (err){
      console.error(`An error occurred: ${err}`)
    }
  }
  
  embedDashboard({
    id: "966fdcd0-cb58-46c4-9aa3-ca38389d0209",

    // production
    supersetDomain: "http://3.87.51.21:8088",

    // local 
    // supersetDomain: "http://localhost:8088",
    mountPoint: document.getElementById("my-superset-container"),
    fetchGuestToken: () => fetchGuestTokenFromBackend()

  })
  

  return (
    <div className='container my-6 pt-6 font-mono'>  

      <Introduction />
      <div className='my-6' id='my-superset-container'></div>
      <Insights />
      <Tweet recentTweets={recentTweets} />
      <Tools />
      <Architecture />
      <Workflow />
      <CICD />
      <PreProd />
      <Code />
        
    </div>

    
  );
}

export default App;
