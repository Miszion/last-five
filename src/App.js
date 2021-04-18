
import React from 'react'

import './App.css';
import Input from './components/Input/Input'
import { fetchEncryptedAccountId, getMatchesJSON } from '../src/helpers/Riot'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  
  fetchMostPlayed = async () => {
    const getRes = await fetch('http://127.0.0.1:8000/most_played', {
      body: JSON.stringify({
        'summonerName': 'TL Yeon'
      }),
      method: 'POST'
    })
  
    const text = await getRes.json()
  
    return text
  }

  fetchWinRate = async () => {
    const getRes = await fetch('http://127.0.0.1:8000/winrate', {
      body: JSON.stringify({
        'summonerName': 'Mish'
      }),
      method: 'POST'
    })

    const text = await getRes.json()

    return text

  }
  
  


  componentDidMount = async () => {

    const fetch = await this.fetchWinRate()

  }

  render = () => {
    return (
      <div className="App">
        <div className='headline-title'>
          Last Five
        </div>
        <Input></Input>
      </div>
    );
  }

}

export default App;
