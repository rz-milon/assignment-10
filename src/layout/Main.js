import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-12  px-4 md:px-24 lg:px-8 mx-auto'>
                <div className='grid lg:col-span-8 md:cols-span-12'>
                <Outlet></Outlet>
                </div>
                <div className='grid lg:col-span-4 md:col'>
                    right side
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;