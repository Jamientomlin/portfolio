import React from 'react'
const img = require('../images/timer.png')

export default function Timer() {
	return (
		<div className='project'>
			<div className='img__ctn'>
				<img
					className='project__img'
					src={img}
					alt="Pomodoro Timer"
				/>
			</div>
			<div className='project__info'>
				<h3>Pomodoro Timer</h3>
				<p>
					Built with ReactJS completed with stateless React architecture using
					custom hooks. This app is perfect for students
					looking to focus more on projects more efficently. 
					The technique uses a timer to break down work into intervals, 
					traditionally 25 minutes in length, separated by short breaks.
				</p>
				<p>
					Tech: React, JavaScript, VercelCLI
				</p>
				<hr />
				<h4>Links</h4>

				<ul className='project__links'>
					<li>
						<a
							href='https://github.com/Jamientomlin/Project_Pomodoro_Timer_Qualified_1'
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
