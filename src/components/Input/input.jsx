import React, { useState } from 'react'

import '../Input/input.css'

const Input = (props) => {

    const { isError, onClick } = props
    const [summonerName, setName] = useState(undefined)


    return (
        <div className='input-summoner'>
            <div className='input'>
                <div className='input-label'>
                    Summoner Name
                </div>
                <div className='input-block'>
                    <input type="text" autoCorrect={false} onChange={async (e) => {
                        setName(e.target.value)
                    }}
                    onKeyUp={async(e) => {
                        if (e.key === 'Enter') {
                            await onClick(summonerName)
                        }
                    }}></input>
                    <button className='search' onClick={async () => {await onClick(summonerName)}}>Search</button>
                </div>
                <div className='error'>{isError}</div>
            </div>
        </div>
    )
}

export default Input