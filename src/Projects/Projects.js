import React from 'react'
import Blog from './Blog'
import Timer from './Timer'
import Food from './Food'
import './Projects.css'

export default function Projects() {
	/**
	 * jQuery Bookmark app
	 * homebl
	 * iro
	 */
	return (
		<section>
			<header className='projects__header'>
				<h2>Recent Projects</h2>
				<p>
					Here are a few projects I built during my time at
					Thinkful
				</p>
			</header>
			<article className='projects'>
				<div className='projects__ctn'>
					<Blog />
					<Timer />
					<Food />
				</div>
			</article>
		</section>
	)
}
