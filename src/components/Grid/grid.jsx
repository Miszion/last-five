import './grid.css'
import React, { useEffect, useState } from 'react'


const findGreatest = (damageOverGames) => {
        
    let maximum = Number.MIN_VALUE
    for (var i in damageOverGames) {
        if (damageOverGames[i] > maximum) {
            maximum = damageOverGames[i]
        }
    }
    return maximum
}


const Grid = (props) => {

    const { damageOverGames } = props

    const [axisArray, setAxisArray] = useState([])


    useEffect(() => {

        const greatest = findGreatest(damageOverGames)
        let populatedArray = []

        for (let i = 0; i < 11; i++) {
            populatedArray[i] = Math.floor((i+1) * Number(greatest / 11)/ 1000)
        }
        
        setAxisArray(populatedArray)
    }, [damageOverGames])

    


    return (
        <div className='grid-container'>
        <div className='grid-y-axis'>
            {axisArray.map((i) => 
                <div className='y-axis-item'>
                    {i}k
                </div>
            )}
        </div>
        <div className='grid-content'>
        <div className='grid'>
            {[...Array(121)].map((_, i) => 
                <div className='grid-line'/>
            )}
        </div>
        <div className='grid-x-axis'>
            {[...Array(11)].map((_, i) => 
                {

                    return (
                        <div className='x-axis-item'>
                        {(i+1) % 2 == 0 && (i+1) / 2}
                        </div>
                    )
                }
            )}
        </div>
        </div>
        </div>
    )

}

export default Grid