import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Frankie Rodriguez</h1>
                <p>Full stack developer </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button className="menu-buttons" onClick={() => {props.onOpenArticle('intro')}}>Intro</button></li>
                <li><button className="menu-buttons" onClick={() => {props.onOpenArticle('work')}}>Projects</button></li>
                <li><button className="menu-buttons" onClick={() => {props.onOpenArticle('resume')}}>Resume</button></li>
                <li><button className="menu-buttons" onClick={() => {props.onOpenArticle('book')}}>Book Me</button></li>
                <li><button className="menu-buttons" onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
};

export default Header
