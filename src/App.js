import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faUmbrella,
  faHammer,
  faHamburger,
  faCableCar,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

function App() {
  const Icons = [faCoffee, faUmbrella, faHammer, faHamburger, faCableCar];
  const [randomNumber, setRandomNumber] = useState();
  const [randomIcon, setRandomIcon] = useState();

  function getRandomArbitrary(min, max) {
    setRandomNumber(Math.trunc(Math.random() * (max - min) + min));
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomIcon(Icons[randomNumber]);
    }, 3000);
  }, [randomNumber]);
  return (
    <div className="App">
      <FontAwesomeIcon icon={randomIcon} />
      <br />
      <br />
      <button onClick={() => getRandomArbitrary(0, 5)}>Get Random Icon</button>
    </div>
  );
}

export default App;
