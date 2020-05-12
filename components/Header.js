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
                <title>Bima Indra Mulya | Front End Engineer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="I'am Bima Indra Mulya. Indonesian who loves sport, travel, and tech. Liked cheesy jokes sometimes, and been around 4 years working as a Front End Engineer." />
                <meta name="keywords" content="Front End Engineer, Front End Developer, Software Engineer, Indonesia, Jakarta" />
                <meta property="og:title" content="Bima Indra Mulya | Front End Engineer" />
                <meta property="og:url" content="http://www.bimaindra.com" />
                <meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C5103AQGQlRNcn_C_Jg/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=g4LUd97i2SjlGoj3APzfDnA3jljJy0_i5v3D8LNKVB0" />
                <link rel="icon" href="./cdn/icons/favicon.png" type="image/png" sizes="16x16"></link>
            </Head>
        </div>
    )
};

export default Header;