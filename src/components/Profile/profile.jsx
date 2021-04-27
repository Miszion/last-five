import './profile.css'
import Game from '../Game/game'
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
            <div className='summoner-games'>
                <div className='games-label'>
                    MATCHES
                </div>
                {gameList.map((game) => 
                    <Game assists={game.assists} deaths={game.deaths} kills={game.kills} championImage={game.champion.image} champion={game.champion.name} result={game.result}></Game>
                )}
            </div>
        </div>
    )

}

export default Profile