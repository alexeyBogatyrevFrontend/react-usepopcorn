import Search from './Search'
import Logo from './Logo'
import { FC, ReactNode } from 'react'

type NavBarProps = {
	children: ReactNode
	query: string
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

const NavBar: FC<NavBarProps> = ({ children, query, setQuery }) => {
	return (
		<nav className='nav-bar'>
			<Logo />
			<Search query={query} setQuery={setQuery} />
			{children}
		</nav>
	)
}

export default NavBar
