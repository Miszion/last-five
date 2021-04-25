import './dashboard.css'
import Ranked from '../Ranked/ranked'
import Profile from '../Profile/profile'
const Dashboard = (props) => {

    const { lookupSummoner } = props

    return (
        <div className='dashboard'>
            <div className='profile-section'>
                <Profile {...lookupSummoner} ></Profile>
            </div>
            <div className='statistics-section'>
                <Ranked rank={lookupSummoner.summonerRank.rank} LP={lookupSummoner.summonerRank.LP}></Ranked>
            </div>
        </div>
    )

}

export default Dashboard