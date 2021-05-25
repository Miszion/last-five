import './grid.css'
import React, { useEffect, useState } from 'react'


const findGreatest = (goldOverGames) => {
        
    let maximum = Number.MIN_VALUE
    for (var i in goldOverGames) {
        if (goldOverGames[i] > maximum) {
            maximum = goldOverGames[i]
        }
    }
    return maximum
}

const Grid = (props) => {

    const { goldOverGames } = props

    const [axisArray, setAxisArray] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [grid, setGrid] = useState(undefined)
    const [gameNumber, setGameNumber] = useState(-1)

    useEffect(() => {

        const greatest = findGreatest(goldOverGames)
        let populatedArray = []

        for (let i = 0; i < 11; i++) {
            populatedArray[i] = Math.floor((i+1) * Number(greatest / 11)/ 1000)
        }
        
        setAxisArray(populatedArray)

        let gridSet = []

        for (let j = 0; j < 11; j++) {
            gridSet[j] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }

        setGrid(gridSet)
    }, [])

    useEffect(() => {

            if (!isLoading && grid && gameNumber <= 5) {
            

                let count = 0

                let goldAmount = goldOverGames[gameNumber]
            
                let newGridSet = grid

                while (count <= 10) {
                    if ((goldAmount >= axisArray[count] * 1000) && (count <= 10)) {
                        newGridSet[10-count][(gameNumber + 1) * 2 - 1] = 1
                        setGrid(newGridSet)
                    }
                    count = count + 1;
                }
            
                setGrid(newGridSet)
                setGameNumber(gameNumber + 1)
        
            }

        
        
    }, [grid, gameNumber, isLoading])

    if (gameNumber === -1) {
        setGameNumber(0)
    }

    return (
        <div className='grid-component'>
            <div className='gold-earned-headline'>
                Gold Earned
            </div>
            <div className='grid-container'>
            <div className='grid-y-axis'>
                {axisArray.map((i) => 
                    <div className='y-axis-item' key={i}>
                        {i}k
                    </div>
                )}
            </div>
            <div className='grid-content'>
            <div className='grid'>
                {grid && grid.map((_, sub) =>
                    _.map((element, i) => 
                    <div className='grid-line' key={(i+1) * (sub + 1)} style={{backgroundColor: element === 0 ? 'white' : '#B567D9', transitionDelay: `${3+(i/(sub+10))}s`}}/>
                    ) 
                )}
            </div>
            <div className='grid-x-axis'>
                {[...Array(11)].map((_, i) => 
                    {

                        return (
                            <div className='x-axis-item' key={i}>
                            {(i+1) % 2 == 0 && (i+1) / 2}
                            </div>
                        )
                    }
                )}
            </div>
            </div>
            </div>
            <div className='x-axis-label'>
                Games
            </div>
        </div>
    )

}

export default Grid