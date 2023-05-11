import { createContext, useState } from 'react';

export const RoverContext = createContext({})
export function RoverProvider(props) {
    const [ ordenates, setOrdenates ] = useState([
        {
            id: 1,
            landingPosition: [1, 2, 'N'],
            instruction: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
            finalPosition: [1, 3, 'N']
        },
        {
            id: 2,
            landingPosition: [3, 3, 'E'],
            instruction: ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
            finalPosition: [2, 3, 'S']
        },
    ]);

    return(
        <RoverContext.Provider value={{ ordenates, setOrdenates }}>
            {props.children}
        </RoverContext.Provider>
    )
}