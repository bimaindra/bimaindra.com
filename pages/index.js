import { server } from '../config';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Button from '../components/Button';

export default function Home({ timeline }) {
	return (
		<div>
			<Hero link="#timeline" gtm="hero-button-know-more" />
			<section id="timeline" className="u-safe-area relative bg-slate-100 dark:bg-slate-700">
				<div className="container">
					<div className="mx-auto md:w-3/4 lg:w-2/4">
						<div className="mb-10">
							<h2 className="mb-4 text-2xl font-title tracking-wide text-gray-900 dark:text-white md:text-4xl">
								<span className="bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent">
									Timeline
								</span>
							</h2>
						</div>
						<Timeline timeline={timeline} />
						<div className="mt-12 md:mt-16">
							<Button type="link" text="More Detail" href="/about" gtm="button-detail-linkedin" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/timeline`);
	const timeline = await res.json();
	return {
		props: {
			timeline,
		},
	};
};
