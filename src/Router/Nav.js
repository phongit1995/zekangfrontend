import React from 'react';
import Link from 'next/link'
import Header from '../components/CommonComponents/Header/Header';
import Footer from '../components/CommonComponents/Footer/Footer';
import Home from '../components/Home/Home';
function Nav(props) {
    return (
        <div>
            <Link href="/Introduces">
                <div>
                    <Header></Header>
                    {props.children}
                </div>
            </Link>
        </div>
    );
}

export default Nav;