import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Bima Indra | Web Front End Engineer</title>
				<meta name="description" content="5+ years working as Web Front End Engineer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Footer />
		</div>
	);
}

export default MyApp;
