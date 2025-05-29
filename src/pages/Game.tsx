import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const players = location.state.players;
  // console.log(players);

  return (
    <div>
      <h1>Time for Battle</h1>
      <div>
        <div>
          {players.map((player, index) => (
            <div key={index}>
              <button>{player.username}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
