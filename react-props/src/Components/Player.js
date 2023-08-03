import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <h3>{name}</h3>
        <Card.Text>
          <h4>{team}</h4>
          <h5>{nationality}</h5>
          <h5>{jerseyNumber}</h5>
          <h5>{age}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Player;
