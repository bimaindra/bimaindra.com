import Head from 'next/head';

const Style = {
    display: 'inline-block',
    marginRight: 15,
    padding: 0,
}

const Header = () => {
    return (
        <div>
            <Head>
                <title>Bima Indra | Front End Engineer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This is an example of a meta description. This will often show up in search results."></meta>
                <link rel="icon" href="favicon.png" type="image/png" sizes="16x16"></link>
            </Head>
        </div>
    )
};

export default Header;