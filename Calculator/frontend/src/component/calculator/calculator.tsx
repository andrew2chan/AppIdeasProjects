import CalculatorKeys from "./calculator-keys/calculator-keys";
import './calculator.css';

const Calculator = ():JSX.Element => {
    const bgColorNumbers = "rgb(50, 50, 50)"
    const bgColorOperations = "rgb(80, 80, 80)"

    return (
        <div className="calculator-body">
            <div className="display-container">
                <div className="display-numbers">
                    99999999999999999
                </div>
            </div>

            {/* Body of the calculator */}
            <CalculatorKeys buttonId="one" bgColor={bgColorNumbers} additionalClass="one" displayText="1" />
            <CalculatorKeys buttonId="two" bgColor={bgColorNumbers} additionalClass="two" displayText="2" />
            <CalculatorKeys buttonId="three" bgColor={bgColorNumbers} additionalClass="three" displayText="3" />
            <CalculatorKeys buttonId="four" bgColor={bgColorNumbers} additionalClass="four" displayText="4" />
            <CalculatorKeys buttonId="five" bgColor={bgColorNumbers} additionalClass="five" displayText="5" />
            <CalculatorKeys buttonId="six" bgColor={bgColorNumbers} additionalClass="six" displayText="6" />
            <CalculatorKeys buttonId="seven" bgColor={bgColorNumbers} additionalClass="seven" displayText="7" />
            <CalculatorKeys buttonId="eight" bgColor={bgColorNumbers} additionalClass="eight" displayText="8" />
            <CalculatorKeys buttonId="nine" bgColor={bgColorNumbers} additionalClass="nine" displayText="9" />
            <CalculatorKeys buttonId="zero" bgColor={bgColorNumbers} additionalClass="zero" displayText="0" />
            <CalculatorKeys buttonId="decimal" bgColor={bgColorNumbers} additionalClass="decimal" displayText="." />
            <CalculatorKeys buttonId="equals" bgColor={bgColorNumbers} additionalClass="equals" displayText="=" />

            <CalculatorKeys buttonId="plus" bgColor={bgColorOperations} additionalClass="plus"displayText="+"  />
            <CalculatorKeys buttonId="subtract" bgColor={bgColorOperations} additionalClass="subtract" displayText="-" />
            <CalculatorKeys buttonId="multiply" bgColor={bgColorOperations} additionalClass="multiply" displayText="*" />
            <CalculatorKeys buttonId="divide" bgColor={bgColorOperations} additionalClass="divide" displayText="/"  />
            <CalculatorKeys buttonId="clear-all" bgColor={bgColorOperations} additionalClass="clear-all" displayText="AC" />
            <CalculatorKeys buttonId="clear" bgColor={bgColorOperations} additionalClass="clear" displayText="C" />
        </div>
    )
}

export default Calculator;