import Link from 'next/link';

const Header = () => {
	return (
		<header className="py-4">
			<div className="container flex justify-between">
				<Link href="/">
					<span>Bima Indra</span>
				</Link>
				<ul className="flex gap-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/works">Works</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
