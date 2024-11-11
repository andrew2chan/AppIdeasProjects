import { reducerAction } from '../../../reducer/calcReducer';
import './calculator-keys.css';

type CalculatorKeysProps = {
    buttonId: string;
    bgColor: string;
    additionalClass: string;
    children: React.ReactNode;
    click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CalculatorKeys = ({ buttonId, bgColor, additionalClass, children, click }: CalculatorKeysProps) => {
    const buttonStyle: React.CSSProperties = {
        "backgroundColor": bgColor,
        "color": "white"
    }

    return (
        <button id={buttonId} style={buttonStyle} className={`buttons ${additionalClass}`} onClick={click}>
            {children}
        </button>
    )
}

export default CalculatorKeys;