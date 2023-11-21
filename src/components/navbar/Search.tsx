import { FC, useRef } from 'react'
import useKey from '../../custom-hooks/useKey'

type SearchProps = {
	query: string
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search: FC<SearchProps> = ({ query, setQuery }) => {
	const inputEl = useRef<HTMLInputElement | null>(null)

	useKey('Enter', () => {
		if (document.activeElement === inputEl.current) return

		inputEl.current?.focus()
		setQuery('')
	})

	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={query}
			ref={inputEl}
			onChange={e => setQuery(e.target.value)}
		/>
	)
}

export default Search
