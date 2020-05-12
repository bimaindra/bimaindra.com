const Socmed = () => {
    return (
        <div>
            <ul className="u-list">
                <li className="u-list__item">
                    <a className="u-link" href="mailto:bimaindramulya@gmail.com"><img src="./cdn/icons/envelope-solid.svg" className="u-icon u-icon__hovered" /></a>
                </li>
                <li className="u-list__item">
                    <a className="u-link" href="http://linkedin.com/in/bimaindra" target="_blank"><img src="./cdn/icons/linkedin-brands.svg" className="u-icon u-icon__hovered" /></a>
                </li>
                <li className="u-list__item">
                    <a className="u-link" href="http://instagram.com/bimaindraa" target="_blank"><img src="./cdn/icons/instagram-square-brands.svg" className="u-icon u-icon__hovered" /></a>
                </li>
                <li className="u-list__item">
                    <a className="u-link" href="http://twitter.com/bimaindraa" target="_blank"><img src="./cdn/icons/twitter-square-brands.svg" className="u-icon u-icon__hovered" /></a>
                </li>
            </ul>
            <style jsx>{`
                .u-list {
                    padding: 0;
                    margin: 0;
                    list-style: none
                }
                
                .u-list>li {
                    display: inline-block;
                    list-style: none;
                    vertical-align: top;
                    margin-left: 5px;
                    margin-right: 5px;
                }

                .u-link {
                    display: inline-block;
                }

                .u-icon {
                    width: 25px;
                    height: 25px;
                }

                .u-icon__hovered {
                    position: relative;
                    transition: transform .25s ease-out;
                }

                .u-icon__hovered:hover {
                    transform: translateY(-3px)
                }
            `}</style>
        </div>
    )
};

export default Socmed;