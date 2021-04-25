import './ranked.css'
import Bronze from '../../assets/Emblem_Bronze.png'
import Iron from '../../assets/Emblem_Iron.png'
import Silver from '../../assets/Emblem_Silver.png'
import Gold from '../../assets/Emblem_Gold.png'
import Platinum from '../../assets/Emblem_Platinum.png'
import Diamond from '../../assets/Emblem_Diamond.png'
import Master from '../../assets/Emblem_Master.png'
import GrandMaster from '../../assets/Emblem_Grandmaster.png'
import Challenger from '../../assets/Emblem_Challenger.png'

const getEmblem = (rank) => {

    const rankTier = rank.split(" ")[0]

    switch(rankTier) {
        case 'IRON':
            return <img src={Iron} alt='Iron'></img>
        case 'BRONZE':
            return <img src={Bronze} alt='Bronze'></img>
        case 'SILVER':
            return <img src={Silver} alt='Silver'></img>
        case 'GOLD':
            return <img src={Gold} alt='Gold'></img>
        case 'PLATINUM':
            return <img src={Platinum} alt='Platinum'></img>
        case 'DIAMOND':
            return <img src={Diamond} alt='Diamond'></img>
        case 'MASTER':
            return <img src={Master} alt='Master'></img>
        case 'GRANDMASTER':
            return <img src={GrandMaster} alt='Grandmaster'></img>
        case 'CHALLENGER':
            return <img src={Challenger} alt='Challenger'></img>
    }

}

const Ranked = (props) => {

    const { rank, LP }  = props 

    return (
        <div className='ranked'>
            <div className='ranked-headline'>
                Ranked Solo / Duo
            </div>
            {getEmblem(rank)}
            <div className='ranked-title'>
                {rank}
                <br></br>
                {LP} LP
            </div>
        </div>
    )

}

export default Ranked