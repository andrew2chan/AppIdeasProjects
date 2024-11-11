export enum reducerType {
    ADD = "ADD",
    SUBTRACT = "SUBTRACT",
    MULTIPLY = "MULTIPLY",
    DIVIDE = "DIVIDE",
    DIGIT = "DIGIT",
    EQUALS = "EQUALS",
    DOT = "DOT",
    CLEAR = "CLEAR",
    CLEARALL = "CLEARALL"
}

export type reducerAction = {
    type: reducerType;
    payload?: string;
}

export type reducerState = {
    firstNum: string;
    secondNum: string;
    operator: string;
}