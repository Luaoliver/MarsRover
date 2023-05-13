import { useEffect, useState } from 'react'
import api from '../api'

export const Home = () => {
    const [ home, setHome ] = useState([])

    const getHome = async() => {
        try {
            const response = await api.get('/rover')
            const data = response.data
            console.log(data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getHome()
    }, [])


  return (
    ''
  )
}

export default Home
