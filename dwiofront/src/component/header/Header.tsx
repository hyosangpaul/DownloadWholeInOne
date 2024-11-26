import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const url = "DownloadWholeInOne/";

    return(
        <header>
            <section className="hbody">
                <article className="nav">
                    <div className="title"><Link to={url}>MAIN</Link></div>
                    <ul id="menu">
                        <li><Link to={url + "Notice"}>Notice</Link></li>
                        <li><Link to={url + "Contact"}>Contact</Link></li>
                    </ul>
                </article>
            </section>
        </header>
    )
}

export default Header;