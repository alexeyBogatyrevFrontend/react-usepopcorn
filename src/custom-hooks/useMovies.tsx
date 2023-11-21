import { useEffect, useState } from 'react'
import { KEY } from '../App'

const useMovies = (query: string) => {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [selectedId, setSelectedId] = useState('')

	useEffect(() => {
		setSelectedId('')

		const fetchMovies = async () => {
			try {
				setIsLoading(true)
				setError('')

				const res = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
				)

				if (!res.ok)
					throw new Error('Something went wrong with fetching movies')

				const data = await res.json()
				if (data.Response === 'False') throw new Error('Movie not found')

				// setSelectedId('')
				setMovies(data.Search)
			} catch (err) {
				setError(err?.message)
			} finally {
				setIsLoading(false)
			}
		}

		if (query.length < 3) {
			setMovies([])
			setError('')
			return
		}

		fetchMovies()
	}, [query])
	return { movies, selectedId, setSelectedId, isLoading, error }
}

export default useMovies
