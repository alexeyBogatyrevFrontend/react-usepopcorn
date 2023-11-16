import { FC } from 'react'
import { MovieData } from '../../App'
import Movie from './Movie'

type MovieListProps = {
	movies: MovieData[]
	setSelectedId: React.Dispatch<React.SetStateAction<string>>
}

const MovieList: FC<MovieListProps> = ({ movies, setSelectedId }) => {
	return (
		<ul className='list list-movies'>
			{movies?.map(movie => (
				<Movie movie={movie} key={movie.imdbID} setSelectedId={setSelectedId} />
			))}
		</ul>
	)
}

export default MovieList
