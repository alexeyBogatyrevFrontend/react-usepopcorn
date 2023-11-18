import { FC } from 'react'
import { MovieData } from '../../App'

type MovieProps = {
	movie: MovieData
	setSelectedId: React.Dispatch<React.SetStateAction<string>>
}

const Movie: FC<MovieProps> = ({ movie, setSelectedId }) => {
	return (
		<li
			key={movie.imdbID}
			onClick={() =>
				setSelectedId(prev => (movie.imdbID === prev ? '' : movie.imdbID))
			}
		>
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
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	)
}

export default Movie
