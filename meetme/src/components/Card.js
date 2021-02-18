import { useState, useEffect } from "react";
import "../stylesheet/Card.css";
import TinderCard from "react-tinder-card";
import axios from "../axios";

const Card = (props) => {
  const [people, setPeople] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/meetme/card");
      console.log("DD", req);
      setPeople(req.data);
    };

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="card">
      <div className="card___container">
        {people.map((character) => (
          <TinderCard
            className="swipe"
            key={character._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: `url(${character.imgUrl})` }}
              className="card___image"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
