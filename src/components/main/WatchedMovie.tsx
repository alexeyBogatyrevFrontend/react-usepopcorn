import { FC } from 'react'
import { WatchedMovieData } from '../../App'

type WatchedMovieProps = {
	movie: WatchedMovieData
	handleDeleteWatched: (id: string) => void
}

const WatchedMovie: FC<WatchedMovieProps> = ({
	movie,
	handleDeleteWatched,
}) => {
	return (
		<li key={movie.imdbID}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
				<button
					className='btn-delete'
					onClick={() => handleDeleteWatched(movie.imdbID)}
				>
					X
				</button>
			</div>
		</li>
	)
}

export default WatchedMovie
