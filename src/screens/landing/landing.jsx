import './landing.css'
import Input from '../../components/Input/input'
import { useState } from 'react';
import Loading from '../../components/Loading/loading.jsx';
import Dashboard from '../../components/Dashboard/dashboard';

const Landing = (props) => {

    
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState("")
    const [finishedLoading, setFinished] = useState(false)
    const { onClick, lookupSummoner } = props

    return (
        <div className='landing'>
            <div className={`headline-input ${finishedLoading && 'finished-loading'}`}>
                <div className='headline-title'>
                Last Five
                </div>
                <Input isError={(!isLoading && isError != "") && isError} onClick={ async (summonerName) => {
                    setLoading(true)
                    const response = await onClick(summonerName)
                    setLoading(false)
                    if (response.error) {
                        setError(response.error)
                    }
                    else {
                        setError("")
                        setFinished(true)
                    }
                }}></Input>
            </div>
            {isLoading && <div className='loading-section'>
                <Loading></Loading>
            </div>}
            {finishedLoading &&
                <Dashboard {...props}></Dashboard>
            }
      </div>
    )

}

export default Landing