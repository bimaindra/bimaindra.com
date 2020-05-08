import Header from './Header';

const Style = {
    padding: 1 + "rem"
}

const Layout = props => {
    return (
        <main className="main-wrapper" style={Style}>
            <Header />
            {props.children}
        </main>
    )
};

export default Layout;