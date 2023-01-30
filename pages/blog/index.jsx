import Head from 'next/head';
import UnderDev from '../../components/UnderDev';
//import { getPosts } from '../../lib/posts';

//export async function getStaticProps() {
//	const posts = await getPosts();

//	if (!posts) {
//		return {
//			notFound: true,
//		};
//	}

//	return {
//		props: { posts },
//	};
//}

const Blog = (posts) => {
	//console.log(posts);
	return (
		<>
			<Head>
				<title>Blog | bimaindra.com</title>
			</Head>
			<h1 className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center text-xl">
				<UnderDev />
			</h1>
		</>
	);
};

export default Blog;
