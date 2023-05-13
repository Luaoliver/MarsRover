

//const Rover = () => {
//  return (
//    <div>Rover</div>
//  )
//}
//
//export default Rover

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../api"
import React from "react"

const Rover = () => {
    const [ rover, setRover ] = useState([])

    useEffect(() => {
        api.get('/rover').then((response) => {
          setRover(response.data);
        });
      }, []);

//    const createRover = async() => {
//        api
//            .post('/rover', {
//            startPositionX: 3,
//	        startPositionY: 5,
//	        instruction: "M",
//	        startDirection: "N"
//      })
//      .then((response) => {
//        setRover(response.data);
//      });
//
//    }

    if (!rover) return "No rover!"

    return (
        ''
    )

}

export default Rover
