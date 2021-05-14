import React from 'react'
const img = require('../images/food.jpg')
export default function Food() {
	return (
		<div className='project'>
			<div className='img__ctn'>
				<img
					className='project__img'
					src={img}
					alt='Iro - Spaced Repetition app'
				/>
			</div>
			<div className='project__info'>
				<h3>GrubDash</h3>
				<p>
					This is the backend portion of a project built using JavaScript, and Express. This project
					was made to mimic a food delivery service, while practice Controllers, and
					Routes in the Express Library
				</p>
				<p>
					Tech: Express, JavaScript, Node.js, PostgreSQL
				</p>
				<hr />
				<h4>Links</h4>
				<ul className='project__links'>
					<li>
						<a
							href='https://github.com/Jamientomlin/Project_GrubDash_Qualified_1'
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
