import { React, useState, useEffect } from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleContainer';
import Loader from '../components/Loader/Loader'
import axios from 'axios';
import dayjs from 'dayjs';
import HeroContainer from '../components/HeroContainer/HeroContainer';

const Home = () => {

    //Hacer fetch al endpoint de las ultimas noticias

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)


    const today = dayjs(new Date()).format('YYYY[-]MM[-]DD')

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)

            try {
                const noticiasFromApi = await axios.get(`https://api.canillitapp.com/latest/${today}`);
                console.log(noticiasFromApi)
                setNoticias(noticiasFromApi.data.slice(0, 27))
                setLoading(false)

            } catch (error) {
                console.log('ERROR DEL CATCH:', error)
                setLoading(false)
            }

        }

        fetchNoticias();

    }, [])

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

export default Home
