import './mostPlayed.css'
import React from 'react'

const MostPlayed = (props) => {

    const { mostPlayed } = props

    return (
        <div className='most-played'>
            <div className='most-played-headline'>
                Most Played
            </div>
            <div className='champion-border'>
                <img src={mostPlayed.image} alt={mostPlayed.name}></img>
            </div>
            <div className='most-played-name'>
                {mostPlayed.name}
            </div>
        </div>
    )

}

export default MostPlayed