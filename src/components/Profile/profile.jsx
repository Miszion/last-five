import './profile.css'

const Profile = (props) => {
    
    const { summonerInfo, summonerName } = props

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
        </div>
    )

}

export default Profile