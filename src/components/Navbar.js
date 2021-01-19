import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from 'react-bootstrap';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Favorite Movies
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <div className= {click ? 'bar' : 'bar2'}></div>
                        <div className= {click ? 'bar' : 'bar2'}></div>
                        <div className= {click ? 'bar' : 'bar2'}></div>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nave-item>'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nave-item>'>
                            <Link to='/movies' className='nav-links' onClick={closeMobileMenu}>
                                Movies
                            </Link>
                        </li>
                        <Button href="/signin" variant="outline-primary" onClick={closeMobileMenu}>Sign In</Button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
