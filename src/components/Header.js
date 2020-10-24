import React from 'react';
import Menu from './Menu';
import logo from '../img/logo-header.png';

const Header = () => {

    function clearLocalstorage() {
        localStorage.clear()
    }

    return (
        <header>
            <div className="header _container">
                <div className="header__inner">
                    <div className="header__logo"><img src={logo} alt="logo" /></div>
                <Menu/>
                </div>
                <div className="header__search">
                    <input placeholder="Поиск по названию картины" /><button onClick={clearLocalstorage}>Найти</button>
                </div>
            </div>
        </header>
    )
}

export default Header