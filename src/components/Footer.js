import React from 'react';
import Menu from './Menu';
import logo from '../img/logo.png';
import phone from '../img/phone.svg';
import address from '../img/address.svg';


const Footer = () => {

    return(
        <footer>
            <div className="footer ">
                <div className="footer__inner">
                    <img src={logo} alt="логотип"/>
                    <Menu/>
                </div>
                <div className="footer__contacts">
                    <div className="footer__phone"><img src={phone} alt="телефон"/>+7 (495) 555-55-55</div>
                    <div className="footer__address"><img src={address} alt="телефон"/>г. Москва, ул. Расплетина, 24</div>
                </div>
            </div>
         </footer>
    )
}

export default Footer