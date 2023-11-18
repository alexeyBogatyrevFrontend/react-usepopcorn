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
			<img
				src={
					movie.Poster === 'N/A'
						? 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						: movie.Poster
				}
				alt={`${movie.Title} poster`}
			/>
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
