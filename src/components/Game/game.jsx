import React, { useEffect, useState } from 'react'
import './game.css'
const Game = (props) => {

    const [didWin, setWin] = useState(false)

    const { result, champion, championImage, kills, deaths, assists } = props


    useEffect(() => {
        setWin(result === 'Loss' ? false : true)
    }, [result])

    return (
        <div className='game'>
            <div className='game-container'>
                <div className='game-champion'>
                    <img src={championImage} alt={champion}></img>
                </div>
                <div className='game-info'>
                    <div className='result-indicator' style={{color: didWin === false ? '#ff0033' : '#4BB543'}}>
                        {didWin == false ? 'Defeat' : 'Victory'}
                    </div>
                    <div className='game-score'>
                        {kills} / {deaths} / {assists}
                    </div>
            </div>
            </div>
        </div>
    )

}

export default Game