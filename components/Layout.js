import Header from './Header';
import css from '../public/scss/style.scss';

const Layout = props => {
    return (
        <main className={css.wrapper}>
            <Header />
            {props.children}
        </main>
    )
};

export default Layout;