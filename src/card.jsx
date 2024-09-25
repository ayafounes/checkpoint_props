import React from 'react';
import { Card } from 'react-bootstrap';

const CardComp = ({ name, nationality, team, number, age, image }) => {
  return (
    <Card style={{ width: '20rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <br></br>
        <Card.Title><h2>{name}</h2></Card.Title>
        <br></br>
        <Card.Text>
            <div style={{ lineHeight: '1.5' }}>
                <p>Nationality: {nationality}</p>
                <p>Team: {team}</p>
                <p>JerseyNumber: {number}</p>
                <p>Age: {age}</p>
            </div> 
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

CardComp.defaultProps = {
  name: "Unknown Player",
};

export default CardComp;
