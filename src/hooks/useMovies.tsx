import { useEffect, useState } from 'react'
import { getPopularMovies } from '../services/movies.service'
import { getMovieDetails } from '../services/movies.service'

export function useMovies() {
    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        getPopularMovies().then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    return movies
}

export function useMovie(id: string) {
    const [movies, setMovie] = useState<any[]>([])

    useEffect(() => {
        getMovieDetails(id).then((response) => {
            setMovie([response.data])
        })
    }, [id])
    return movies}