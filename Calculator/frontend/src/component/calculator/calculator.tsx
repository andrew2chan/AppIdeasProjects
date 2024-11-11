import { useReducer, useEffect } from "react";
import CalculatorKeys from "./calculator-keys/calculator-keys";
import './calculator.css';
import { reducerAction, reducerState, reducerType } from "../../reducer/calcReducer";

const reducer = (state: reducerState, action: reducerAction): reducerState => {
    const { type, payload } = action;

    if(state.firstNum === "ERR" && (type !== reducerType.CLEARALL)) return state;

    switch(type) {
        case reducerType.ADD:
            return {...state, operator: "+" }
        case reducerType.SUBTRACT:
            return {...state, operator: "-" }
        case reducerType.MULTIPLY:
            return {...state, operator: "*" }
        case reducerType.DIVIDE:
            return {...state, operator: "/" }
        case reducerType.DIGIT:
            return state.operator === "" ? (
                { ...state, firstNum: state.firstNum + payload }
            ) : (
                { ...state, secondNum: state.secondNum + payload }
            )
        case reducerType.EQUALS:
            return { ...state, firstNum: payload || "", secondNum: '' }
        case reducerType.DOT:
            return state.operator === "" ? (
                { ...state, firstNum: state.firstNum + payload }
            ) : (
                { ...state, secondNum: state.secondNum + payload }
            )
        case reducerType.CLEAR:
            if(state.firstNum !== "" && state.secondNum === "" && state.operator === "") state = { ... state, firstNum: "" };
            if(state.firstNum !== "" && state.secondNum === "" && state.operator !== "") state = { ... state, operator: "" };
            if(state.firstNum !== "" && state.secondNum !== "" && state.operator !== "") state = { ... state, secondNum: "" };
            return state;
        case reducerType.CLEARALL:
            return { ...state, ...initialState }
        default:
            return state;
    }
}

const initialState: reducerState = {firstNum: "", secondNum: "", operator: ""};

const Calculator = ():JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const bgColorNumbers = "rgb(50, 50, 50)"
    const bgColorOperations = "rgb(80, 80, 80)"

    useEffect(() => {
        console.log(state);
    }, [state])

    const handleEquals = async () => {
        if(state.firstNum === "" && state.secondNum === "" && state.operator === "") return;
        if(state.firstNum !== "" && state.secondNum === "" && state.operator === "") return;
        if(state.firstNum !== "" && state.secondNum === "" && state.operator !== "") { // do the operator on first num
            if(state.firstNum === "ERR") {
                return;
            }

            let response = await fetch("http://localhost:8080/calculate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstNum: state.firstNum,
                    secondNum: state.firstNum,
                    operator: state.operator
                })
            })

            let data = await response.text();

            dispatch({ type: reducerType.EQUALS, payload: data })
        }
        if(state.firstNum !== "" && state.secondNum !== "" && state.operator !== "") { // if we have both numbers then do operator on second num
            if(state.firstNum === "ERR") {
                return;
            }
            
            let response = await fetch("http://localhost:8080/calculate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstNum: state.firstNum,
                    secondNum: state.secondNum,
                    operator: state.operator
                })
            })

            let data = await response.text();

            dispatch({ type: reducerType.EQUALS, payload: data })
        }
    }

    return (
        <div className="calculator-body">
            <div className="display-container">
                <div className="display-numbers">
                    {state.secondNum !== "" ? state.secondNum : state.firstNum}
                </div>
            </div>

            {/* Body of the calculator */}
            <CalculatorKeys buttonId="one" bgColor={bgColorNumbers} additionalClass="one" click={() => dispatch({ type: reducerType.DIGIT, payload: "1" })} >1</CalculatorKeys>
            <CalculatorKeys buttonId="two" bgColor={bgColorNumbers} additionalClass="two" click={() => dispatch({ type: reducerType.DIGIT, payload: "2" })} >2</CalculatorKeys>
            <CalculatorKeys buttonId="three" bgColor={bgColorNumbers} additionalClass="three" click={() => dispatch({ type: reducerType.DIGIT, payload: "3" })} >3</CalculatorKeys>
            <CalculatorKeys buttonId="four" bgColor={bgColorNumbers} additionalClass="four" click={() => dispatch({ type: reducerType.DIGIT, payload: "4" })} >4</CalculatorKeys>
            <CalculatorKeys buttonId="five" bgColor={bgColorNumbers} additionalClass="five" click={() => dispatch({ type: reducerType.DIGIT, payload: "5" })} >5</CalculatorKeys>
            <CalculatorKeys buttonId="six" bgColor={bgColorNumbers} additionalClass="six" click={() => dispatch({ type: reducerType.DIGIT, payload: "6" })} >6</CalculatorKeys>
            <CalculatorKeys buttonId="seven" bgColor={bgColorNumbers} additionalClass="seven" click={() => dispatch({ type: reducerType.DIGIT, payload: "7" })} >7</CalculatorKeys>
            <CalculatorKeys buttonId="eight" bgColor={bgColorNumbers} additionalClass="eight" click={() => dispatch({ type: reducerType.DIGIT, payload: "8" })} >8</CalculatorKeys>
            <CalculatorKeys buttonId="nine" bgColor={bgColorNumbers} additionalClass="nine" click={() => dispatch({ type: reducerType.DIGIT, payload: "9" })} >9</CalculatorKeys>
            <CalculatorKeys buttonId="zero" bgColor={bgColorNumbers} additionalClass="zero" click={() => dispatch({ type: reducerType.DIGIT, payload: "0" })} >0</CalculatorKeys>
            <CalculatorKeys buttonId="decimal" bgColor={bgColorNumbers} additionalClass="decimal" click={() => dispatch({ type: reducerType.DOT, payload: "." })} >.</CalculatorKeys>
            <CalculatorKeys buttonId="equals" bgColor={bgColorNumbers} additionalClass="equals" click={handleEquals}>=</CalculatorKeys>

            <CalculatorKeys buttonId="plus" bgColor={bgColorOperations} additionalClass="plus" click={() => dispatch({ type: reducerType.ADD })} >+</CalculatorKeys>
            <CalculatorKeys buttonId="subtract" bgColor={bgColorOperations} additionalClass="subtract" click={() => dispatch({ type: reducerType.SUBTRACT })} >-</CalculatorKeys>
            <CalculatorKeys buttonId="multiply" bgColor={bgColorOperations} additionalClass="multiply" click={() => dispatch({ type: reducerType.MULTIPLY })} >*</CalculatorKeys>
            <CalculatorKeys buttonId="divide" bgColor={bgColorOperations} additionalClass="divide" click={() => dispatch({ type: reducerType.DIVIDE })} >/</CalculatorKeys>
            <CalculatorKeys buttonId="clear-all" bgColor={bgColorOperations} additionalClass="clear-all" click={() => dispatch({ type: reducerType.CLEARALL })} >AC</CalculatorKeys>
            <CalculatorKeys buttonId="clear" bgColor={bgColorOperations} additionalClass="clear" click={() => dispatch({ type: reducerType.CLEAR })} >C</CalculatorKeys>
        </div>
    )
}

export default Calculator;