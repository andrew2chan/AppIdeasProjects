import { CSSProperties, memo } from "react";

type propType = {
    color: string,
    status: boolean
}

const Bulb = ({ color, status }: propType) => {
    const style: CSSProperties= {
        backgroundColor: color,
        boxShadow: !status ? "none" : `0 0 10px 3px ${color}`
    }

    return (
        <>
            <div className="bulb">
                <div className="base"></div>
                <div className="light" style={style}></div>
            </div>
        </>
    )
}

export default memo(Bulb);