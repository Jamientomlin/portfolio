import React from 'react'

const img = require('../images/Blogging.jpg')

export default function Blog() {
	return (
		<div className='project'>
			<div className='img__ctn'>
				<img
					className='project__img'
					src={img}
					alt='My jQuery Bookmark App'
				/>
			</div>

			<div className='project__info'>
				<h3>ReactJS Blog</h3>
				<p>
					I used ReactJS to build a 
					blog app. I built a json database within the project to
					manage and store the blog posts. This app is useful to
					record online journal entries.
				</p>
				<p>Tech: HTML5, CSS3, JavaScript, ReactJS</p>
				<hr />
				<h4>Links</h4>
				<ul className='project__links'>
					<li>
						<a
							href='https://github.com/Jamientomlin/Blog'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
