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
			<div className="container">
				<UnderDev />
			</div>
		</>
	);
};

export default Blog;
