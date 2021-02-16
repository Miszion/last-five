import React, { useState } from 'react'
import { getMatchList } from '../../helpers/Riot'

import '../Input/Input.css'

const Input = (props) => {

    const [summonerName, setName] = useState(undefined)

    const onClick = () => {
        console.log(getMatchList(summonerName))
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