import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import App from "../App"
import { RoverProvider } from "../context/roverContext"
import { ModalProvider } from "../context/modalContext"
import Header from "../components/Header"
import Main from "../components/Main"
import ModalOverlay from "../components/ModalOverlay"
import ModalOverlayRestart from "../components/ModalOverlayRestart"
import Summary from "../components/Summar"
import api from "../api"

//export const Summary = () => {
//    const [ summary, setSummary ] = useState([])
//
//    const getHome = async() => {
//        try {
//            const response = await api.get('/rover')
//            const data = response.data
//            console.log(data)
//
//            setHome(data)
//        } catch (error) {
//            console.log(error)
//        }
//
//    }
//
//    useEffect(() => {
//        getHome()
//    }, [])
//
//    return (
//      axios
//    )
//}

export const Home = () => {
    const rover = api.get("/rover")
}