import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-slate-50 py-4 shadow-inner shadow-slate-200">
			<div className="container flex justify-center">
				<p className="text-xs font-normal tracking-wider">
					<span>&copy; 2022 | </span>
					<Link href="https://twitter.com/bimaindraa" target="_blank" className="hover:text-blue-400">
						@bimaindra
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
