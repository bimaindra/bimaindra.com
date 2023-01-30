import Image from 'next/image';
import Winking from '../../assets/images/winking-face.png';

const UnderDev = () => {
	return (
		<div className="absolute top-1/2 left-0 right-0 flex -translate-y-1/2 flex-col items-center gap-4 text-center">
			<h1 className="text-xl">
				This page is under development. <br /> Come back soon for a better experience.
			</h1>
			<Image src={Winking} width="40" height="40" alt="Under Maintenance" />
		</div>
	);
};

export default UnderDev;
