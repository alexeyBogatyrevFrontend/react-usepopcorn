import { FC } from 'react'

type SearchProps = {
	query: string
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search: FC<SearchProps> = ({ query, setQuery }) => {
	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={query}
			onChange={e => setQuery(e.target.value)}
		/>
	)
}

export default Search
