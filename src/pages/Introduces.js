import React from 'react';
import Introduce from '../components/Introduce/Introduce';
import Header from "../components/CommonComponents/Header/Header";
import Footer from "../components/CommonComponents/Footer/Footer";
import MainHome from '../components/Home/MainHome/MainHome';
import Nav from "../Router/Nav";
function Introduces(props) {
    return (
        <div>
                <Nav>
                    <MainHome></MainHome>
                </Nav>
                <Introduce></Introduce>
                <Footer></Footer>
        </div>
    );
}

export default Introduces;