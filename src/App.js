
import React from 'react'

import './App.css';
import { lookupSummoner } from '../src/helpers/Riot'
import Landing from '../src/screens/landing/landing'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }


  lookupSummoner = async (summonerName) => {

    this.setState({
      isLoading: true
    })

    const summoner = await lookupSummoner(summonerName)

    this.setState({
        lookupSummoner: summoner,
        isLoading: false 
    })

    return summoner

  }
  

  render = () => {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' render={() => (
              <Landing {...this.state} onClick={async (summonerName) => {
                return await this.lookupSummoner(summonerName)
              }}></Landing>
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
