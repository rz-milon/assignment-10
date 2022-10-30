import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-img.webp'

const Home = () => {
    return (
        <div className="hero mb-32">
            <img className='bg-cover bg-center bg-fixed h-screen' src={bannerImg} alt="" />
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Our Academy</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-info hover:bg-transparent hover:text-white"><Link to={'/course'}>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;