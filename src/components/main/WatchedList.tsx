import { FC } from 'react'
import { WatchedMovieData } from '../../App'
import WatchedMovie from './WatchedMovie'

type WatchedListProps = {
	watched: WatchedMovieData[]
	handleDeleteWatched: (id: string) => void
}

const WatchedList: FC<WatchedListProps> = ({
	watched,
	handleDeleteWatched,
}) => {
	return (
		<ul className='list'>
			{watched.map(movie => (
				<WatchedMovie
					movie={movie}
					key={movie.imdbID}
					handleDeleteWatched={handleDeleteWatched}
				/>
			))}
		</ul>
	)
}

export default WatchedList
