import React from 'react'
import '../Input/Input.css'
const Input = (props) => {

    return (
        <div className='input-summoner'>
            <div className='input'>
                <div className='input-label'>
                    Summoner Name
                </div>
                <div className='input-block'>
                    <input type="text"></input>
                    <button className='search'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Input