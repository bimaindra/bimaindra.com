import Button from '../Button';

const Hero = (props) => {
	return (
		<section className="relative min-h-[322px] md:min-h-[452px]">
			<div className="fixed top-14 bottom-auto left-0 right-0 w-full bg-slate-50 shadow-sm">
				<div className="grid min-h-[320px] place-items-center text-center md:min-h-[450px]">
					<div className="container">
						<h1 className="mb-4 text-3xl font-bold md:text-4xl">
							<span className="emoji-hand mr-1 inline-block text-2xl md:text-3xl">&#128075;</span> Hola, I'm Bima.
						</h1>
						<p className="mb-6 font-light">
							Web Front End Engineer from Indonesia <span className="ml-1">🇮🇩</span>
						</p>
						<Button type="link" text="Know More" href={props.link} gtm={props.gtm} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
