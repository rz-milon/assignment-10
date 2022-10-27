import React from 'react';

const FqA = () => {
    return (

        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <h2 className='text-gray-500 font-bold text-2xl pb-10'>Frequently asked questions</h2>
            <div className="grid  lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
                <div tabIndex={0} className="collapse collapse-arrow   bg-base-100 border-b">
                    <div className="collapse-title text-xl font-medium">
                    How much does course cost?
                    </div>
                    <div className="collapse-content bg-gray-100"> 
                        <p>Free or Premium course available</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow   bg-base-100 border-b">
                    <div className="collapse-title text-xl font-medium">
                        Course Duration
                    </div>
                    <div className="collapse-content bg-gray-100"> 
                        <p>Short course 3 months, 6 months & 1 year time duration</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 border-b">
                    <div className="collapse-title text-xl font-medium">
                        Course Requirements
                    </div>
                    <div className="collapse-content bg-gray-100"> 
                        <p>Fresher only type code</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 border-b">
                    <div className="collapse-title text-xl font-medium">
                        Accessibility in this course
                    </div>
                    <div className="collapse-content bg-gray-100"> 
                        <p>This premium course is life time accessibility</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 border-b">
                    <div className="collapse-title text-xl font-medium">
                        Support
                    </div>
                    <div className="collapse-content bg-gray-100"> 
                        <p>We are always support our student</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FqA;