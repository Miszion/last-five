import React, { useEffect, useState } from 'react'
 
import './loading.css'

const Loading = (props) => {


    const [selected, setSelected] = useState(0)


    useEffect(() => {

        let interval = setInterval(() => {
            selected < 2 ? setSelected(selected + 1) : setSelected(0)
        }, 300)

        return () => clearInterval(interval)

    }, [selected])


    return (
        <div className='loader'>
            <div className='loading-text'>
                Loading Summoner
            </div>
            <div className='circle-grid'>
                <div className={`loading-circle ${selected === 0 && 'active-1'}`}/>
                <div className={`loading-circle ${selected === 1 && 'active-2'}`}/>
                <div className={`loading-circle ${selected === 2 && 'active-3'}`}/>
            </div>
        </div>
    )

}

export default Loading