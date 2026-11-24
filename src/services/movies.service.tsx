import { moviesApis } from '../config/http'

export function getPopularMovies() {
    return moviesApis.get('movie/popular')
}

export function getMovieDetails(movieId: string) {
    return moviesApis.get(`movie/${movieId}`)
}