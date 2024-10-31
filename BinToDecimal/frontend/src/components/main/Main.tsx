import {ChangeEvent, useState, useEffect, FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";

const Main = ():JSX.Element => {
    const [submitStatus, updateSubmitStatus] = useState(false);
    const [binaryText, updateBinaryText] = useState("");
    const [dec, updateDec] = useState(0);

    const info = useQuery({
        queryKey: ["binary", binaryText],
        queryFn: async () => {
            let response = await fetch("http://localhost:8080/convert/" + binaryText)
            return response.json();
        },
        enabled: submitStatus && binaryText.length > 0
    })

    useEffect(() => {
        if(info.isSuccess) {
            updateDec(info.data);
            updateSubmitStatus(false);
        }
    },[info.isSuccess, info.data])

    const handleBinaryChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateBinaryText(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateSubmitStatus(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="binary">Binary</label>
                <input type="text" name="binary" id="binary" onChange={handleBinaryChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
            <div>{dec == -1 ? "Please enter a valid binary number" : dec}</div>
        </>
    )
}

export default Main;