import { useEffect, useState } from 'react'
import { WatchedMovieData } from '../App'

const useLocalStorageState = (
	initialState: WatchedMovieData[],
	key: string
) => {
	const [value, setValue] = useState<WatchedMovieData[]>(() => {
		const storedValue = localStorage.getItem(key)

		return storedValue ? JSON.parse(storedValue) : initialState
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue] as const
}

export default useLocalStorageState
