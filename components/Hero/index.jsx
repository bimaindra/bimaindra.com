import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import waveEmoji from '../../assets/images/waving-hand.png';

const Hero = ({ link, gtm }) => {
	const [even, setEven] = useState();

	const getDate = () => {
		const date = new Date();
		const day = date.getDate();

		if (day % 2 === 0) {
			setEven(true);
		} else {
			setEven(false);
		}
	};

	useEffect(() => {
		getDate();
	}, []);

	return (
		<section className="relative min-h-[320px] md:min-h-[450px]">
			<div className={`bg-pattern-${even ? 'triangle' : 'polka'} fixed top-14 bottom-auto left-0 right-0 w-full`}>
				<div className="grid min-h-[320px] place-items-center bg-slate-50 bg-opacity-0 text-center backdrop-blur-[3px] md:min-h-[450px]">
					<div className="container">
						<h1 className="mb-4 flex items-center justify-center gap-x-4 text-3xl font-title md:text-4xl">
							<Image
								src={waveEmoji}
								alt="Hola!"
								width="256"
								height="256"
								className="emoji-hand emoji-hand-disable-xl h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16"
							/>
							<span>Hola, I'm Bima.</span>
						</h1>
						<p className="mb-6">
							Web Front End Engineer from Indonesia <span className="ml-1">🇮🇩</span>
						</p>
						<Button type="link" text="More About" href={link} gtm={gtm} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
