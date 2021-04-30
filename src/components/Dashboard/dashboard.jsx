import './dashboard.css'
import React from 'react'
import Ranked from '../ranked/ranked.jsx'
import Profile from '../profile/profile.jsx'
import MostPlayed from '../mostPlayed/mostPlayed.jsx'
import Winrate from '../winrate/winrate.jsx'
import AverageDamage from '../averageDamage/averageDamage.jsx'

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
            </div>
        </div>
    )

}

export default Dashboard