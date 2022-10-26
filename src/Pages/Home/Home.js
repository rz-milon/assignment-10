import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/pexels-pixabay-301926.jpg'

const Home = () => {
    return (
        <div className="hero">
            <img className='min-h-screen' src={bannerImg} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Our Academy</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline btn-info"><Link to={'/course'}>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;