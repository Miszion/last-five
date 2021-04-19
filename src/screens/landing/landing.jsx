import './landing.css'
import Input from '../../components/Input/Input'
import { useHistory } from 'react-router'
const Landing = (props) => {

    let history = useHistory();

    const { onClick } = props

    return (
        <div className='landing'>
            <div className='headline-input'>
                <div className='headline-title'>
                Last Five
                </div>
                <Input onClick={ async (summonerName) => {
                   const response = await onClick(summonerName)
                    history.push('/profile')
                }}></Input>
            </div>
      </div>
    )

}

export default Landing