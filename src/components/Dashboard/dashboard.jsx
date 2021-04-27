import './dashboard.css'
import Ranked from '../Ranked/ranked'
import Profile from '../Profile/profile'
import MostPlayed from '../MostPlayed/mostPlayed'
import Winrate from '../Winrate/winrate'
import AverageDamage from '../AverageDamage/averageDamage'

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