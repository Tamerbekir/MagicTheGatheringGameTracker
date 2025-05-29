import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [players, setPlayers] = useState([
    { id: 0, username: "" },
    { id: 1, username: "" },
  ]);

  const navigate = useNavigate();

  function handleNumberChange(event) {
    const value = parseInt(event.target.value);
    setNumberOfPlayers(value);

    if (value === 2) {
      setPlayers([
        { id: 0, username: "" },
        { id: 1, username: "" },
      ]);
    } else if (value === 3) {
      setPlayers([
        { id: 0, username: "" },
        { id: 1, username: "" },
        { id: 2, username: "" },
      ]);
    } else if (value === 4) {
      setPlayers([
        { id: 0, username: "" },
        { id: 1, username: "" },
        { id: 2, username: "" },
        { id: 3, username: "" },
      ]);
    } else {
      setPlayers([]);
    }
  }

  function handleNameChange(event, index) {
    const newPlayers = [...players];
    newPlayers[index].username = event.target.value;
    setPlayers(newPlayers);
  }

  function startGame(event) {
    event.preventDefault();
    navigate("/game", {
      state: {
        players: players,
      },
    });
  }

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={startGame}>
        <input
          type="number"
          value={numberOfPlayers}
          onChange={handleNumberChange}
          min="2"
          max="8"
          placeholder="Number of Players"
        />
        {numberOfPlayers >= 2 && (
          <input
            type="text"
            placeholder="Player 1"
            value={players[0]?.username || ""}
            onChange={(event) => handleNameChange(event, 0)}
          />
        )}
        {numberOfPlayers >= 2 && (
          <input
            type="text"
            placeholder="Player 2"
            value={players[1]?.username || ""}
            onChange={(event) => handleNameChange(event, 1)}
          />
        )}
        {numberOfPlayers >= 3 && (
          <input
            type="text"
            placeholder="Player 3"
            value={players[2]?.username || ""}
            onChange={(event) => handleNameChange(event, 2)}
          />
        )}
        {numberOfPlayers >= 4 && (
          <input
            type="text"
            placeholder="Player 4"
            value={players[3]?.username || ""}
            onChange={(event) => handleNameChange(event, 3)}
          />
        )}
        {numberOfPlayers >= 5 && (
          <input
            type="text"
            placeholder="Player 5"
            value={players[4]?.username || ""}
            onChange={(event) => handleNameChange(event, 4)}
          />
        )}
        {numberOfPlayers >= 6 && (
          <input
            type="text"
            placeholder="Player 6"
            value={players[5]?.username || ""}
            onChange={(event) => handleNameChange(event, 5)}
          />
        )}
        {numberOfPlayers >= 7 && (
          <input
            type="text"
            placeholder="Player 7"
            value={players[6]?.username || ""}
            onChange={(event) => handleNameChange(event, 6)}
          />
        )}
        {numberOfPlayers >= 8 && (
          <>
            <input
              type="text"
              placeholder="Player 8"
              value={players[7]?.username || ""}
              onChange={(event) => handleNameChange(event, 7)}
            />
            <p>Max players reached</p>
          </>
        )}

        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default Home;
