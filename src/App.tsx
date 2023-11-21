import NavBar from './components/navbar/NavBar'
import Main from './components/main/Main'
import { useState } from 'react'
import Numresults from './components/navbar/Numresults'
import MovieList from './components/main/MovieList'
import WatchedSummary from './components/main/WatchedSummary'
import WatchedList from './components/main/WatchedList'
import Box from './components/main/Box'
import Loader from './components/UI/Loader'
import ErrorMessage from './components/UI/ErrorMessage'
import SelectedMovie from './components/main/SelectedMovie'
import useMovies from './custom-hooks/useMovies'
import useLocalStorageState from './custom-hooks/useLocalStorageState'

export type MovieData = {
	imdbID: string
	Title: string
	Year: string
	Poster: string
}

export type WatchedMovieData = {
	imdbID: string
	Title: string
	Year: string
	Poster: string
	runtime: number
	imdbRating: number
	userRating: number
}

export const tempMovieData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt0133093',
		Title: 'The Matrix',
		Year: '1999',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt6751668',
		Title: 'Parasite',
		Year: '2019',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	},
]

export const tempWatchedData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
]

export const average = (arr: number[]) =>
	arr.reduce((acc: number, cur: number) => acc + cur / arr.length, 0)

export const KEY = 'ea558729'
const tempQuery = 'interstellar'

export default function App() {
	const [query, setQuery] = useState(tempQuery)
	const { movies, selectedId, setSelectedId, isLoading, error } =
		useMovies(query)
	const [watched, setWatched] = useLocalStorageState([], 'watched')

	const handleAddWatched = (movie: WatchedMovieData) => {
		setWatched((watched: WatchedMovieData[]) => {
			return [...watched, movie]
		})
	}

	const handleDeleteWatched = (id: string) => {
		setWatched(watched => watched.filter(movie => movie.imdbID !== id))
	}

	return (
		<>
			<NavBar query={query} setQuery={setQuery}>
				<Numresults movies={movies} />
			</NavBar>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<MovieList movies={movies} setSelectedId={setSelectedId} />
					)}
					{error && <ErrorMessage message={error} />}
				</Box>
				<Box>
					{selectedId ? (
						<SelectedMovie
							key={selectedId}
							selectedId={selectedId}
							setSelectedId={setSelectedId}
							handleAddWatched={handleAddWatched}
							watched={watched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedList
								watched={watched}
								handleDeleteWatched={handleDeleteWatched}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	)
}
