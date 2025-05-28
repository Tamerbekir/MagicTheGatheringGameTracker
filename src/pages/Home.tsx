import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Player {
  id: number;
  username: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleStartGame = () => {
    navigate("/game", { state: { players } });
  };

  const handleNumberOfPlayersChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setNumberOfPlayers(value);
      const newPlayers = Array.from({ length: value }, (_, i) => ({
        id: i,
        username: "",
      }));
      setPlayers(newPlayers);
    } else {
      setNumberOfPlayers(0);
      setPlayers([]);
    }
  };

  const handlePlayerNameChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPlayers = [...players];
    newPlayers[index].username = event.target.value;
    setPlayers(newPlayers);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to Magic the gathering! Get ready to start your game. Prepare
        for battle and take home the win! Are you ready?
      </p>
      <div className="gameDetails">
        <form onSubmit={handleStartGame}>
          <input
            type="number"
            placeholder="How many players?"
            value={numberOfPlayers === 0 ? "" : numberOfPlayers} 
            name="amountOfPlayers"
            onChange={handleNumberOfPlayersChange}
            min={2}
            max={8}
          />
          {numberOfPlayers > 1 && (
            <>
              <h2>Enter Player Names</h2>
              {Array.from({ length: numberOfPlayers }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Player ${index + 1} name..`}
                  value={players[index]?.username || ""}
                  name={`player-${index}`}
                  onChange={(event) => handlePlayerNameChange(event, index)}
                  required 
                />
              ))}
            </>
          )}
          {/* {numberOfPlayers === 4 ? 'Max reached' : ''} */}
          <button type="submit">Start Game</button>
        </form>
      </div>
    </div>
  );
}