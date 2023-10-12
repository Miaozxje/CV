import Image from 'next/image'

const Home = () => {
	return (
		<div className='flex justify-center h-full'>
			<div className='flex flex-col justify-center h-full'>
				<div className='py-20'>
					<div className='flex gap-x-2'>
						<div>
							<Image
								src='https://avatars.githubusercontent.com/u/72405743?v=4'
								className='rounded-[50%]'
								width={460}
								height={460}
								alt='my profile picture'
							/>
						</div>
						<div>
							<div>Hello, my name is Ly Vi Cuong</div>
							<div>Skills:</div>
							<ul className='list-disc pl-4'>
								<li>Having knowledge about OOP, SOLID, Design Pattern</li>
								<li>Understanding of Web Accessibility, SEO, Web Performance, Security</li>
								<li>Experience with agile software development method: Scrum</li>
								<li>
									Work experiences in the following programming languages/technologies: ASP.NET, SQL,
									Javascript, Typescript, ReactJS, NextJS, Python
								</li>
								<li>Knowledge of project tools: Azure, Git</li>
							</ul>
							<div>Projects:</div>
							<ul className='list-disc pl-4'>
								<li>
									<a href='https://saigonbooks.com.vn/home' target='_blank' className='underline'>
										Saigon Books
									</a>
									: working as Front-end Developer, using ReactJS - Redux
								</li>
								<li>
									<a href='https://zenbooks.vn/home' target='_blank' className='underline'>
										Zenbooks
									</a>
									: working as Full-stack Developer, using ReactJS - Redux (FE) and ASP.Net Core
									(Admin + API + Service)
								</li>
								<li>
									<a href='https://nxbdhsp.com.vn/home' target='_blank' className='underline'>
										Publisher of Hanoi National University of Education
									</a>
									: working as Full-stack Developer, using ReactJS - Redux (FE) and ASP.Net Core
									(Admin + API + Service)
								</li>
								<li>
									Water Meter OCR (Internal system): develop system that can detect number from water
									meter using Python
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
