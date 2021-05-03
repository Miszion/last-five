import './profile.css'
import GameList from '../GameList/gameList'
import React from 'react'

const Profile = (props) => {
    
    const { summonerInfo, summonerName, gameList } = props

    return (
        <div className='profile'>
            <div className='icon-border'>
                <div className='summoner-icon'>
                    <img src={summonerInfo.icon} alt='Summoner Icon'></img>
                </div>
            </div>
            <div className='summoner-name'>
                <div className='summoner-label'>
                    SUMMONER NAME
                </div>
                {summonerName}
            </div>
            <div className='summoner-level'>
            <div className='summoner-label'>
                    SUMMONER LEVEL
                </div>
                {summonerInfo.summoner_level}
            </div>
            <GameList label="MATCHES" gameList={gameList}></GameList>
        </div>
    )

}

export default Profile