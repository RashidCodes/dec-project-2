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


function App() {

  const [recentTweets, setRecentTweets] = useState([])
  const [access_token, setAccessToken] = useState('')

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


  useEffect(() => {

    // get the most recent tweets
    const init = async () => {
      try {
        const response = await axios.get('/backend/access')
        setAccessToken(response.data.access_token)

      } catch (error) {
        console.error(`An error occurred: ${error}`)
      }
    }

    init()
  }, [])


  const fetchGuestTokenFromBackend = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: '/backend/access_guest',
        data: JSON.stringify({ token: access_token }),
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
    id: "1314c7ab-4510-47ec-a21a-d91c045c1fe1",
    supersetDomain: "http://localhost:8088",

    // local 
    // supersetDomain: "http://localhost:8088",
    mountPoint: document.getElementById("my-superset-container"),
    fetchGuestToken: () => fetchGuestTokenFromBackend(),
    // dashboardUiConfig: { hideTitle: true },
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
      <Code />
  
    </div>

    
  );
}

export default App;
