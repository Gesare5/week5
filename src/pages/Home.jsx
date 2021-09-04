import React from 'react';
import '../styles/home.css';

function Home() {
    return (
        <div className="Home">

            <div className="notes-background">
                <h2 className="title">To Do App</h2>
                <a className='main-btn' href='/register'>
                    Get Started
                </a>

                <div className="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                    <div className="pin"></div>
                    <div className="pin"></div>
                </div>
                <div className="notes-icon">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            </div>
        </div >
    );
}

export default Home;


