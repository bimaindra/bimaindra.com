import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Button from '../components/Button';

export default function Home() {
	const dataTimeline = [
		{
			title: 'Gojek Indonesia',
			location: 'Jakarta',
			description: 'Web Front End Developer',
			date: 'Nov 2019 - Present',
			type: 'jobs',
		},
		{
			title: 'Tempo Scan Pacific',
			location: 'Jakarta',
			description: 'Digital Technical | Front End Developer',
			date: 'Feb  2017 - Nov 2019',
			type: 'jobs',
		},
		{
			title: 'Gunadarma University',
			location: 'Jakarta',
			description: 'Bachelor of Computer Science',
			date: 'Sep 2017',
			type: 'education',
		},
		{
			title: 'Bambu Digital',
			location: 'Jakarta',
			description: 'Jr. Front End Developer',
			date: 'Aug 2015 - Feb 2017',
			type: 'jobs',
		},
		{
			title: 'Totalindo Rekayasa Telematika',
			location: 'Jakarta',
			description: 'IT Staff',
			date: 'May 2013 - Apr 2015',
			type: 'jobs',
		},
		{
			title: 'SMK Telkom Malang',
			location: 'Malang',
			date: 'Jul 2013',
			type: 'education',
		},
		{
			title: 'Telkomsel',
			location: 'Jakarta',
			description: 'Internship Progam',
			date: 'Oct 2012 - Dec 2012',
			type: 'jobs',
		},
	];

	return (
		<>
			<Hero link="#timeline" gtm="hero-button-know-more" />
			<section id="timeline" className="u-safe-area relative bg-slate-100">
				<div className="container">
					<div className="mx-auto lg:w-2/4">
						<div className="mb-10">
							<h2 className="mb-4 text-2xl font-black tracking-wider text-gray-900 dark:text-white md:text-3xl">
								<span className="bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent">
									Timeline
								</span>
							</h2>
						</div>
						<Timeline timeline={dataTimeline} />
						<div className="mt-12 md:mt-16">
							<Button
								type="link"
								text="More Detail"
								href="https://www.linkedin.com/in/bimaindra/"
								gtm="button-detail-linkedin"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
