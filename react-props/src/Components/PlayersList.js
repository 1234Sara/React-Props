import React from "react";
import Player from "./Player";
import players from "./players";
import "./PlayersList.css";

const PlayersList = () => {
  return (
    <div className="player-list">
      {/* {players.map((player) => (
        <Player
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))} */}

      {players.map((player) => (
        <Player {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
