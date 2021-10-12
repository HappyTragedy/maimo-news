import React, { useState, useEffect } from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleContainer'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HeroContainer from '../components/HeroContainer/HeroContainer'

const Search = () => {

    const { slug } = useParams()//Obtengo el parametro

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)

            try {
                const noticiasFromApi = await axios.get(`https://api.canillitapp.com/search/${slug}`);
                console.log(noticiasFromApi)
                setNoticias(noticiasFromApi.data.slice(0, 27))
                setLoading(false)

            } catch (error) {
                console.log('ERROR DEL CATCH:', error)
                setLoading(false)
            }

        }

        fetchNoticias();

    }, [slug])

    return (
        <>
            {loading && <Loader />}
            <HeroContainer />
            <SimpleContainer>
                {!loading && <ResponsiveGrid noticias={noticias} />}
            </SimpleContainer>
        </>
    )
}


export default Search
