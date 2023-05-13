import { createContext, useState, useEffect } from 'react';
import api from '../api';

export const RoverContext = createContext({})
export function RoverProvider(props) {
    const [ ordenates, setOrdenates ] = useState([])

    const getHome = async() => {
        try {
            const response = await api.get('/rover')
            const data = response.data
            const formatedOrdenates = data.map(ordenates => {
                return {
                    plateauId: ordenates.plateau_id,
                    landingPosition: [
                        ordenates.start_position_x, 
                        ordenates.start_position_y, 
                        ordenates.start_direction 
                    ],
                    instruction: ordenates.instruction,
                    currentPosition: [
                        ordenates.current_position_x,
                        ordenates.current_position_y,
                        ordenates.current_direction
                    ]

                }
            })
            
            return formatedOrdenates

        } catch (error) {
            console.log(error)
        }

    }

    const createRover = async({ startPositionX, startPositionY, instruction, startDirection }) => {
        api
            .post('/rover', {
            startPositionX,
	        startPositionY,
	        instruction,
	        startDirection
      })
      .then((response) => {
        console.log(response.data);
      });

    }
    
    useEffect(() => {
        getHome().then((response) => {
            console.log(response)
            setOrdenates(response)
        })
    }, [])

    return(
        <RoverContext.Provider value={{ ordenates, setOrdenates, createRover }}>
            {props.children}
        </RoverContext.Provider>
    )
}