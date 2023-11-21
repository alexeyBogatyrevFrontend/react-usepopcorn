import { Dispatch, SetStateAction, useEffect } from 'react'

type ActioType = Dispatch<SetStateAction<string>>

const useKey = (key: string, action: ActioType) => {
	useEffect(() => {
		const callback = (e: KeyboardEvent) => {
			if (e.code.toLowerCase() === key.toLowerCase()) {
				action('')
			}
		}

		document.addEventListener('keydown', callback)

		return () => {
			document.removeEventListener('keydown', callback)
		}
	}, [key, action])
}

export default useKey
