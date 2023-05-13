import { createContext, useEffect, useState } from "react";
import api from "../api";


export const PlateauContext = createContext({})
export function PlateauProvider(props) {

    const [ ordenates, setOrdenates ] = useState([])

    const getHome = async() => {
        try {
            const response = await api.get('/rover')
            const data = response.data
            const formatedOrdenates = data.map(ordenates => {
                return {
                    xAxis: ordenates.x_axis,
                    yAxis: ordenates.y_axis

                }
            })

            return formatedOrdenates

        } catch (error) {
            console.log(error)
        }

    }

    const createPlateau = async({ xAxis, yAxis }) => {
        api
            .post('/plateau', {
                xAxis,
                yAxis
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
        <PlateauContext.Provider value={{ ordenates, setOrdenates, createPlateau }}>
            {props.children}
        </PlateauContext.Provider>
    )
}