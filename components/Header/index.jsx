import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();

	const linkItems = [
		{
			name: 'Home',
			href: '/',
			active: router.pathname === '/',
		},
		{
			name: 'About',
			href: '/about',
			active: router.pathname === '/about',
		},
		{
			name: 'Works',
			href: '/works',
			active: router.pathname === '/works',
		},
	];

	return (
		<header className="fixed left-0 top-0 z-50 w-full bg-slate-50 py-4 shadow-sm backdrop-blur-sm">
			<div className="container flex justify-between">
				<Link href="/" className="group text-gray-700">
					<span className="flex items-center gap-x-2">
						<span className="font-extrabold tracking-[2px]">
							<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl transition-colors group-hover:bg-gradient-to-b">
								BIM
							</span>
						</span>
						<span className="transform transition-transform group-hover:lg:rotate-45">&#128526;</span>
					</span>
				</Link>
				<ul className="flex gap-4">
					{linkItems.map((linkItem, index) => {
						return (
							<li key={index}>
								<Link
									href={linkItem.href}
									className={`u-link-underline u-link-underline-black block rounded text-sm font-medium text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
										linkItem.active ? 'active text-blue-700' : ''
									}`}>
									{linkItem.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</header>
	);
};

export default Header;
