import { useNavigate } from "react-router"

export default function Game() {
    const navigate = useNavigate()

    const handleEndGame = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Game</h1>
            <button onClick={handleEndGame}>End Game</button>
        </div>
    )
}