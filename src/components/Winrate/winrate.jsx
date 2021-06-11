import './winrate.css'
import React from 'react'
import Fraction from 'fraction.js'

const calculateFraction = (winrate) => {
    
    const percentage = `${(winrate/100) * 5}`

    const fraction = new Fraction(percentage).toFraction(true)

    return ( 
        <div className='winrate-fraction'>
            {fraction} / 5
        </div>
    )
}

const calculateWinRate = (winrate) => {

    if (winrate == 0) {
        return ( 
        <div className='winrate-section'>
        </div> )
    }
    else if (winrate == 20) {
        return (
        <div className='winrate-section'>
            <div className='circular-winrate'>
                <div className='winrate-percentage' style={{transform: `rotate(0deg) skew(18deg)`}}></div>
            </div>
        </div> )
    }
    else if (winrate == 40) {
        return (
        <div className='winrate-section'>
            <div className='circular-winrate'>
             <div className='winrate-percentage' style={{transform: `rotate(0deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(90deg) skew(36deg)`}}></div>
             </div>
        </div> )
    }
    else if (winrate == 60) {
        return (
        <div className='winrate-section'>
            <div className='circular-winrate'>
             <div className='winrate-percentage' style={{transform: `rotate(0deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(90deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(180deg) skew(54deg)`}}></div>
             </div>
        </div> )
    }
    else if (winrate == 80) {
        return (
        <div className='winrate-section'>
            <div className='circular-winrate'>
             <div className='winrate-percentage' style={{transform: `rotate(0deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(90deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(180deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(270deg) skew(72deg)`}}></div>
             </div>
        </div> )
    }
    else if (winrate == 100) {
        return (
        <div className='winrate-section'>
            <div className='circular-winrate'>
             <div className='winrate-percentage' style={{transform: `rotate(0deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(90deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(180deg) skew(0deg)`}}></div>
             <div className='winrate-percentage' style={{transform: `rotate(270deg) skew(0deg)`}}></div>
             </div>
        </div> )
    }
}

const Winrate = (props) => {

    return (
        <div className='winrate'>
            <div className='winrate-headline'>
                Winrate
            </div>
            <div className='circular-chart'>
                <div className='circular-chart-circle'>
                   {calculateWinRate(props.winRate)}
                </div>
            </div>
            <div className='winrate-desc'>
                <div className='chart-winrate'>
                    {props.winRate}% <br></br>
                    {calculateFraction(props.winRate)}
                </div>
            </div>
        </div>
    )

}

export default Winrate