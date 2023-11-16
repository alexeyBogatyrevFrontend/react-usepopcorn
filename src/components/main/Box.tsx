import { FC, ReactNode, useState } from 'react'

type BoxProps = {
	children: ReactNode
}

const Box: FC<BoxProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className='box'>
			<button className='btn-toggle' onClick={() => setIsOpen(open => !open)}>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && children}
		</div>
	)
}

export default Box
