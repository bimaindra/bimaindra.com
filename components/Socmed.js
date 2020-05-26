import css from '../public/scss/style.scss';

const Socmed = () => {
    return (
        <div>
            <ul className={css['u-list']}>
                <li className={css['u-list__item']}>
                    <a className={css['u-link']} href="mailto:bimaindramulya@gmail.com"><img src="./cdn/icons/envelope-solid.svg" className={[css['u-icon'], css['u-icon__hovered']].join(' ')} alt="Bima Indra Mulya" /></a>
                </li>
                <li className={css['u-list__item']}>
                    <a className={css['u-link']} href="http://linkedin.com/in/bimaindra" target="_blank"><img src="./cdn/icons/linkedin-brands.svg" className={[css['u-icon'], css['u-icon__hovered']].join(' ')} alt="Bima Indra Mulya" /></a>
                </li>
                <li className={css['u-list__item']}>
                    <a className={css['u-link']} href="http://instagram.com/bimaindraa" target="_blank"><img src="./cdn/icons/instagram-square-brands.svg" className={[css['u-icon'], css['u-icon__hovered']].join(' ')} alt="Bima Indra Mulya" /></a>
                </li>
                <li className={css['u-list__item']}>
                    <a className={css['u-link']} href="http://twitter.com/bimaindraa" target="_blank"><img src="./cdn/icons/twitter-square-brands.svg" className={[css['u-icon'], css['u-icon__hovered']].join(' ')} alt="Bima Indra Mulya" /></a>
                </li>
                <li className={css['u-list__item']}>
                    <a className={css['u-link']} href="http://github.com/wongdarjo" target="_blank"><img src="./cdn/icons/github-square-brands.svg" className={[css['u-icon'], css['u-icon__hovered']].join(' ')} alt="Bima Indra Mulya" /></a>
                </li>
            </ul>
        </div>
    )
};

export default Socmed;