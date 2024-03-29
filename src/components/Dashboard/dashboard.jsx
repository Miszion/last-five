import './dashboard.css'
import React from 'react'
import Ranked from '../Ranked/ranked.jsx'
import Profile from '../Profile/profile.jsx'
import MostPlayed from '../MostPlayed/mostPlayed.jsx'
import Winrate from '../Winrate/winrate.jsx'
import Damage from '../Damage/damage.jsx'
import Grid from '../Grid/grid'
import GameList from '../GameList/gameList'

const Dashboard = (props) => {

    const { lookupSummoner } = props

    const { gameList } = lookupSummoner

    return (
        <div className='dashboard'>
            <div className='profile-section'>
                <Profile summonerInfo={lookupSummoner.summonerInfo} summonerName={lookupSummoner.summonerName} gameList={lookupSummoner.gameList}></Profile>
            </div>
                <div className='statistics-section'>
                    <Ranked rank={lookupSummoner.summonerRank.rank} LP={lookupSummoner.summonerRank.LP}></Ranked>
                    <MostPlayed mostPlayed={lookupSummoner.mostPlayed}></MostPlayed>
                    <Winrate winRate={lookupSummoner.winRate}></Winrate>
                    <Damage damageTotal={lookupSummoner.damageTotal} averageDpm={lookupSummoner.averageDpm}></Damage>
                    <Grid goldOverGames={lookupSummoner.goldList}></Grid>
                    <GameList className="mobile" label="Last Five Matches" gameList={gameList}></GameList>
                </div>
        </div>
    )

}

export default Dashboard