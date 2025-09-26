import {useEffect, useState} from "react";
import HarryPotter from "./HarryPotter";
import type {Character} from "./Characters.ts";

export default function App() {

    const [data, setData] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://potterapi-fedeperin.vercel.app/en/characters")
            const json = await res.json()
            setData(json)
        }

        fetchData()
            .then(() => console.log("Success"))
            .catch((e: Error) => console.log("There was the error: " + e))

    })
    return (
        <HarryPotter data={data}/>
    );
}