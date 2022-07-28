import React from "react";
import headerStyle from './Header.module.css';
import logo from '../../assets/Twitter.png';

export const Header = () => {
    return (
            
        <header className={headerStyle.header}>
            <img src={logo} alt="Logo da rede social" />
            <h2>Connects</h2>
        </header>
    )
}