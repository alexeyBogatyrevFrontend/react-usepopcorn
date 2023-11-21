import { FC, useEffect, useRef } from 'react'

type SearchProps = {
	query: string
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search: FC<SearchProps> = ({ query, setQuery }) => {
	const inputEl = useRef<HTMLInputElement | null>(null)

	useEffect(() => {
		const callback = (e: KeyboardEvent) => {
			if (document.activeElement === inputEl.current) return

			if (e.code === 'Enter') {
				inputEl.current?.focus()
				setQuery('')
			}
		}

		document.addEventListener('keydown', callback)

		return () => document.removeEventListener('keydown', callback)
	}, [setQuery])

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
