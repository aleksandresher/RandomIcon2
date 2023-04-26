import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faUmbrella,
  faHammer,
  faHamburger,
  faCableCar,
  faAddressBook,
  faWalking,
  faEarth,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

function App() {
  const Icons = [
    faCoffee,
    faUmbrella,
    faHammer,
    faHamburger,
    faCableCar,
    faAddressBook,
    faWalking,
    faEarth,
    faRadio,
  ];
  const [randomNumber, setRandomNumber] = useState();
  const [randomIcon, setRandomIcon] = useState();

  function getRandomNumber(min, max) {
    setRandomNumber(Math.trunc(Math.random() * (max - min) + min));
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomIcon(Icons[randomNumber]);
    }, 3000);
  }, [randomNumber]);
  return (
    <div className="App">
      <div className="IconContainer">
        <FontAwesomeIcon icon={randomIcon} size="3x" color="#1CA9C9" />
      </div>

      <button onClick={() => getRandomNumber(0, 9)}>Get Random Icon</button>
    </div>
  );
}

export default App;
