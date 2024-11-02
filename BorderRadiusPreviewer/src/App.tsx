import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [topLeft, updateTopLeft] = useState<number>(0);
  const [topRight, updateTopRight] = useState<number>(0);
  const [bottomLeft, updateBottomLeft] = useState<number>(0);
  const [bottomRight, updateBottomRight] = useState<number>(0);
  const [borderRadiusStyle, updateBorderRadiusStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    let borderRadiusString: string = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    updateBorderRadiusStyle({
      ...borderRadiusStyle,
      borderRadius: borderRadiusString
    })
  },[topLeft, topRight, bottomLeft, bottomRight])

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    let intValue: number = parseInt(event.target.value);

    switch(event.target.id) {
      case "top-left-input":
        updateTopLeft(intValue);
        break;
      case "top-right-input":
        updateTopRight(intValue);
        break;
      case "bottom-left-input":
        updateBottomLeft(intValue);
        break;
      default:
        updateBottomRight(intValue);
    }
  }

  return (
    <div className="container">
      <div className="top-left corners">
        <label htmlFor="top-left-input">Top left input</label>
        <input type="number" id="top-left-input" onChange={handleInputs} value={topLeft}></input>
      </div>
      <div className="copy">
        <button onClick={() => { navigator.clipboard.writeText(String(borderRadiusStyle.borderRadius || "0px"))}}>COPY</button>
      </div>
      <div className="top-right corners">
        <label htmlFor="top-right-input">Top right input</label>
        <input type="number" id="top-right-input" onChange={handleInputs} value={topRight}></input>
      </div>
      <div className="center" style={borderRadiusStyle}></div>
      <div className="bottom-left corners">
        <label htmlFor="bottom-left-input">Bottom left input</label>
        <input type="number" id="bottom-left-input" onChange={handleInputs} value={bottomLeft}></input>
      </div>
      <div className="bottom-right corners">
        <label htmlFor="bottom-right-input">Bottom right input</label>
        <input type="number" id="bottom-right-input" onChange={handleInputs} value={bottomRight}></input>
      </div>
    </div>
  )
}

export default App
