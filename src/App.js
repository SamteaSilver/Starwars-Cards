import { useState, useEffect } from 'react';
import { API } from './services/API';
import StarShipCard from './components/StarShipCard'
import './style.css'
export default function App() {

  const [ships, setShips] = useState([])

  useEffect(() => {
    API().then((data) => {
      setShips(data.results)
    })
  }, [])

  return (
    <div className="App">
      {/* {ships && ships.map((ship) => {
        return <li>{ship.name}</li>
      })} */}

      {ships && ships.map((ship, index) => {
        return (
          <StarShipCard
            key={index}
            name={ship.name}

          />
        )
      })}
    </div>
  );
}
