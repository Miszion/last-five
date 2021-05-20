import './gameList.css'
import Game from '../Game/game'
const GameList = (props) => {

    const { gameList, className, label } = props

    return (
        <div className={`summoner-games ${className ? className : ''}`}>
            <div className={`games-label ${className ? className : ''}`}>
                {label}
            </div>
            {gameList.map((game) => 
                <Game assists={game.assists} deaths={game.deaths} kills={game.kills} championImage={game.champion.image} champion={game.champion.name} result={game.result}></Game>
            )}
        </div>
    )

}

export default GameList