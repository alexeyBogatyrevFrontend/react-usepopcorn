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
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
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
