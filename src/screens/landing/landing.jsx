import './landing.css'
import Input from '../../components/Input/Input'
import { useState } from 'react';
import Loading from '../../components/loading/loading';
const Landing = (props) => {

    
    const [isLoading, setLoading] = useState(false)
    const [finishedLoading, setFinished] = useState(false)
    const { onClick } = props

    return (
        <div className='landing'>
            <div className={`headline-input ${finishedLoading && 'finished-loading'}`}>
                <div className='headline-title'>
                Last Five
                </div>
                <Input onClick={ async (summonerName) => {
                    setLoading(true)
                    const response = await onClick(summonerName)
                    setLoading(false)
                    setFinished(true)
                }}></Input>
            </div>
            {isLoading && <div className='loading-section'>
                <Loading></Loading>
            </div>}
      </div>
    )

}

export default Landing