import React from "react";
import Player from "./Player";
import players from "./players";
import "./PlayersList.css";

const PlayersList = () => {
  const styleObject = {
    width: "60rem",
    height: "55vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid red",
  };
  return (
    <div style={styleObject}>
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
