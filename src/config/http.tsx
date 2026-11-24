import axios from 'axios'

export const moviesApis = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTJmNWM5Y2YwODAwMDEzMjVkYWMxMmEzYWYwZTRkMCIsIm5iZiI6MTc5NTQ4MzgzNy4wMTMsInN1YiI6IjZiMDRlOGJkNWU3NGU5ZmUwNzU1ZjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5eykBjzHthc3RYRiIRUXb-kz5S094ilbzHQC4M8GdLI`,
    }
})