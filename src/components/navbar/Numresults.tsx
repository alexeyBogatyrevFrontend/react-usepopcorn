import { FC } from 'react'
import { MovieData } from '../../App'

type NumresultsProps = {
	movies: MovieData[]
}

const Numresults: FC<NumresultsProps> = ({ movies }) => {
	return (
		<p className='num-results'>
			Found <strong>{movies.length}</strong> results
		</p>
	)
}

export default Numresults
