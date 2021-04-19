import './landing.css'
import Input from '../../components/Input/Input'
import { useHistory } from 'react-router'
import { useState } from 'react';
import Loading from '../../components/loading/loading';
const Landing = (props) => {

    let history = useHistory();
    
    const [isLoading, setLoading] = useState(false)

    const { onClick } = props

    return (
        <div className='landing'>
            <div className='loading-section'>
                {isLoading && <Loading></Loading>}
            </div>
            <div className='headline-input'>
                <div className='headline-title'>
                Last Five
                </div>
                <Input onClick={ async (summonerName) => {
                    setLoading(true)
                    const response = await onClick(summonerName)
                    setLoading(false)
                    history.push('/profile')
                }}></Input>
            </div>
      </div>
    )

}

export default Landing