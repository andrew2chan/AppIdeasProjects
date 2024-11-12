import { useState, Fragment, useEffect } from 'react'
import Bulb from './Bulb';
import './App.css'

type bulbProps = {
  id: string;
  color: string;
}

function App() {
  const initialState: bulbProps[] = [
    {
      id: "bulb1",
      color: "white"
    },
    {
      id: "bulb2",
      color: "white"
    },
    {
      id: "bulb3",
      color: "white"
    },
    {
      id: "bulb4",
      color: "white"
    },
    {
      id: "bulb5",
      color: "white"
    },
    {
      id: "bulb6",
      color: "white"
    },
    {
      id: "bulb7",
      color: "white"
    },
  ]

  const [status, updateStatus] = useState(false);
  const [bulbs, updateBulbs] = useState(initialState);

  const handleToggle = () => {
    updateStatus(!status);
  }

  useEffect(() => {
    if(status) {
      updateBulbs([
        {
          id: "bulb1",
          color: "red"
        },
        {
          id: "bulb2",
          color: "green"
        },
        {
          id: "bulb3",
          color: "red"
        },
        {
          id: "bulb4",
          color: "green"
        },
        {
          id: "bulb5",
          color: "red"
        },
        {
          id: "bulb6",
          color: "green"
        },
        {
          id: "bulb7",
          color: "red"
        },
      ])
    }
    else {
      updateBulbs(initialState);
    }
  }, [status])

  return (
    <>
      <div className="box">
        {
          bulbs.map((item, index) => {
            return (
              <Fragment key={index}>
                <Bulb color={item.color} status={status} />
              </Fragment>
            )
          })
        }
      </div>

      <div className="control-box">
        <span className="christmas-text">Merry Christmas!</span>
        <br/>
        <button onClick={handleToggle}>Turn on/off</button>
      </div>
    </>
  )
}

export default App
