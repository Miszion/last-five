import './dashboard.css'
import React from 'react'
import Ranked from '../Ranked/ranked.jsx'
import Profile from '../Profile/profile.jsx'
import MostPlayed from '../MostPlayed/mostPlayed.jsx'
import Winrate from '../Winrate/winrate.jsx'
import AverageDamage from '../AverageDamage/averageDamage.jsx'
import Grid from '../Grid/grid'
const Dashboard = (props) => {

    const { lookupSummoner } = props

    return (
        <div className='dashboard'>
            <div className='profile-section'>
                <Profile summonerInfo={lookupSummoner.summonerInfo} summonerName={lookupSummoner.summonerName} gameList={lookupSummoner.gameList}></Profile>
            </div>
                <div className='statistics-section'>
                    <Ranked rank={lookupSummoner.summonerRank.rank} LP={lookupSummoner.summonerRank.LP}></Ranked>
                    <MostPlayed mostPlayed={lookupSummoner.mostPlayed}></MostPlayed>
                    <Winrate winRate={lookupSummoner.winRate}></Winrate>
                    <AverageDamage averageDamage={lookupSummoner.averageDamage} averageDpm={lookupSummoner.averageDpm}></AverageDamage>
                    <Grid goldOverGames={[50000, 30000, 20000, 10000, 60000]}></Grid>
                </div>
        </div>
    )

}

export default Dashboard