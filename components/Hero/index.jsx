import Image from 'next/image';
import Button from '../Button';
import waveEmoji from '../../assets/images/waving-hand.png';

const Hero = (props) => {
	return (
		<section className="relative min-h-[322px] md:min-h-[452px]">
			<div className="fixed top-14 bottom-auto left-0 right-0 w-full shadow-sm">
				<div className="grid min-h-[320px] place-items-center text-center md:min-h-[450px]">
					<div className="container">
						<h1 className="mb-4 flex items-center justify-center gap-x-4 text-3xl font-title md:text-4xl">
							<Image
								src={waveEmoji}
								alt="Hola!"
								width="60"
								height="60"
								className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16"
							/>
							<span>Hola, I'm Bima.</span>
						</h1>
						<p className="mb-6">
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
