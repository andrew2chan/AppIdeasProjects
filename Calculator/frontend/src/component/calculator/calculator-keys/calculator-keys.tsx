import './calculator-keys.css';

type CalculatorKeysProps = {
    displayText: string;
    buttonId: string;
    bgColor: string;
    additionalClass: string;
}

const CalculatorKeys = ({ buttonId, bgColor, additionalClass, displayText }: CalculatorKeysProps) => {
    const buttonStyle: React.CSSProperties = {
        "backgroundColor": bgColor,
        "color": "white"
    }

    return (
        <button id={buttonId} style={buttonStyle} className={`buttons ${additionalClass}`}>
            {displayText}
        </button>
    )
}

export default CalculatorKeys;