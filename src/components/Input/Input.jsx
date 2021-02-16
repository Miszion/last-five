import React, { useState } from 'react'
import { getMatchesJSON, getFiveMatches} from '../../helpers/Riot'

import '../Input/Input.css'

const Input = (props) => {

    const [summonerName, setName] = useState(undefined)

    const onClick = async () => {
        
        const response = await getMatchesJSON(summonerName)

        const getMatches = await getFiveMatches(response)

        console.log(getMatches)
    }


    return (
        <div className='input-summoner'>
            <div className='input'>
                <div className='input-label'>
                    Summoner Name
                </div>
                <div className='input-block'>
                    <input type="text" onChange={(e) => {
                        setName(e.target.value)
                    }}></input>
                    <button className='search' onClick={onClick}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Input