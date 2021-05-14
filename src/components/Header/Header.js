import React from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import './Header.css'
export default function Header() {
	const history = useHistory()
	const match = useRouteMatch()
	console.log(history, match)
	return (
		<header className='main__header is-transparent'>
			<nav className='navigation'>
				<div className='nav__links'>
					<Link to='/'>Home</Link>
					<Link to='/contact'>Contact Me</Link>
				</div>
			</nav>
		</header>
	)
}
