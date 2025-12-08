import './ranked.css'
import React from 'react'
import Bronze from '../../assets/ranked/Emblem_Bronze.webp'
import Iron from '../../assets/ranked/Emblem_Iron.webp'
import Silver from '../../assets/ranked/Emblem_Silver.webp'
import Gold from '../../assets/ranked/Emblem_Gold.webp'
import Platinum from '../../assets/ranked/Emblem_Platinum.webp'
import Diamond from '../../assets/ranked/Emblem_Diamond.webp'
import Master from '../../assets/ranked/Emblem_Master.webp'
import GrandMaster from '../../assets/ranked/Emblem_Grandmaster.webp'
import Challenger from '../../assets/ranked/Emblem_Challenger.webp'
import Unranked from '../../assets/ranked/Emblem_Unranked.webp'
import Emerald from '../../assets/ranked/Emblem_Emerald.webp'
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
        case 'EMERALD':
            return <img src={Emerald} alt='Emerald'></img>
        case 'UNRANKED':
            return <img src={Unranked} alt='Unranked'></img>
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
                {LP && `${LP} LP`}
            </div>
        </div>
    )

}

export default Ranked