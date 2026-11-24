import { useState } from 'react'
import { useEffect } from 'react'
import { getPopularMovies } from '../services/movies.service'

export function Movies()
{
    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        getPopularMovies().then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    return (
    <section>
        <h1>Filmes populares</h1>
        <ul>
            {movies.map((movie) => ( <li>{movie.title}</li> ))}
        </ul>
    </section>)
}