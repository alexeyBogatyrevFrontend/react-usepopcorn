import { FC, useEffect, useState } from 'react'
import { KEY, WatchedMovieData } from '../../App'
import Loader from '../UI/Loader'
import StarRating from '../rating/StarRating'
import useKey from '../../custom-hooks/useKey'

type SelectedMovieProps = {
	selectedId: string
	setSelectedId: React.Dispatch<React.SetStateAction<string>>
	handleAddWatched: (movie: WatchedMovieData) => void
	watched: WatchedMovieData[]
}

type MovieInfo = {
	imdbID: string
	Title: string
	Year: string
	Poster: string
	Runtime: string
	imdbRating: string
	Plot: string
	Released: string
	Actors: string
	Director: string
	Genre: string
}

const initialValue = {
	Title: '',
	Year: '',
	Poster: '',
	Runtime: '',
	imdbRating: '',
	Plot: '',
	Released: '',
	Actors: '',
	Director: '',
	Genre: '',
	imdbID: '',
}

const SelectedMovie: FC<SelectedMovieProps> = ({
	selectedId,
	setSelectedId,
	handleAddWatched,
	watched,
}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [movie, setMovie] = useState<MovieInfo>(initialValue)
	const [userRating, setUserRating] = useState(0)

	const isWatched = watched.filter(item => item.imdbID === selectedId)
	const watchedUserRating = watched.find(
		movie => movie.imdbID === selectedId
	)?.userRating

	const {
		imdbID,
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie

	useKey('Escape', setSelectedId)

	useEffect(() => {
		const getMovieDetails = async () => {
			setIsLoading(true)

			try {
				const res = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
				)

				const data = await res.json()

				setMovie(data)
			} catch (error) {
				alert(error)
			} finally {
				setIsLoading(false)
			}
		}

		getMovieDetails()
	}, [selectedId])

	useEffect(() => {
		document.title = title ? title : 'usePopcorn'

		return () => {
			document.title = 'usePopcorn'
		}
	}, [title])

	const clickHandler = () => {
		const data = {
			imdbID,
			Title: title,
			Year: year,
			Poster: poster,
			runtime: runtime === 'N/A' ? 10 : Number(runtime.split(' ')[0]),
			imdbRating: Number(imdbRating),
			userRating,
		}

		handleAddWatched(data)
		setSelectedId('')
	}

	return (
		<div className='details'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<header>
						<button className='btn-back' onClick={() => setSelectedId('')}>
							&larr;
						</button>
						<img
							src={
								poster === 'N/A'
									? 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									: poster
							}
							alt={`Poster of ${movie} movie`}
						/>

						<div className='details-overview'>
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime === 'N/A' ? 10 + ' min' : runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐️</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						<div className='rating'>
							{!isWatched.length ? (
								<>
									<StarRating maxRating={10} setUserRating={setUserRating} />
									{userRating ? (
										<button className='btn-add' onClick={clickHandler}>
											+ Add to list
										</button>
									) : (
										''
									)}
								</>
							) : (
								<p>
									You rated with movie {watchedUserRating} <span>⭐️</span>
								</p>
							)}
						</div>
						<p>
							<em>{plot}</em>
						</p>
						<p>Starring {actors}</p>
						<p>Directed by {director}</p>
					</section>
				</>
			)}
		</div>
	)
}

export default SelectedMovie
