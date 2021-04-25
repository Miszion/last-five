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
                {summonerName}
            </div>
            <div className='summoner-level'>
                {summonerInfo.summoner_level}
            </div>
        </div>
    )

}

export default Profile