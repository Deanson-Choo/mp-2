import type {Character} from "./Characters.ts";
import styled from "styled-components";

const Wrapper=styled.div`
    text-align: center;
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    display:inline-block;
    background-color: antiquewhite;
`;

const CharName = styled.h1`
    font-family: Garamond, sans-serif;
    padding: 2px 0;
`;


const Info = styled.p`
    font-style: italic;
`;

const Bold = styled.p`
    font-weight: bold;
`;

export default function HarryPotter(props: { data: Character[] }) {
    return (
        <div>
            {props.data.map((char: Character) => {
                return (
                    <Wrapper key = {char.index}>
                        <CharName>{char.fullName}</CharName>
                        <img src={char.image} alt={char.fullName} />
                        <Bold>Played By: </Bold><Info>{char.interpretedBy}</Info>
                        <Bold>HogWarts House: </Bold><Info>{char.hogwartsHouse}</Info>
                    </Wrapper>
                );
            })}
        </div>
    );
}