import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-container">
            <Link to='/'>
                <Logo className='logo'/>
            </Link>
        </div>
        <div className="options">
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin' className='option'>SIGN IN</Link> 
            }
        </div>
    </div>
)

export default Header;