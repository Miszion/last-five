import { useEffect, useState } from "react"
import './averageDamage.css'
const AverageDamage = (props) => {

    const [widthLoaded, setWidth] = useState(false)

    useEffect(() => {
        let time = setTimeout(() => setWidth(true), 2000)
        return () => {
            clearTimeout(time)
        }
    }, [])

    return (
        <div className='average-damage'>
            <div className='average-damage-headline'>
                Damage Dealt to Champions
            </div>
            <div className='average-damage-chart'>
                <div className='average-damage-bar' style={{width: widthLoaded ? '250px' : '0px'}}></div>
            </div>
            <div className='average-damage-desc' style={{opacity: widthLoaded ? '1' : '0', transform: widthLoaded ? `translateY('0')` : `translateY('50px')`}}>
                <div className='average-damage-desc-title'>
                    TOTAL
                </div>
                {props.averageDamage.toFixed(0)}
                <div className='average-damage-desc-title' style={{marginTop: '15px'}}>
                    AVG DAMAGE PER MINUTE
                </div>
                {props.averageDpm.toFixed(1)}
            </div>
        </div>
    )

}

export default AverageDamage