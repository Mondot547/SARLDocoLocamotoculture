import React from 'react';
import './scss/Home.scss';
import Nav from '../components/menu/Nav';

const Home = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <h1>hello world</h1>
            </main>
        </>
    );
};

export default Home;