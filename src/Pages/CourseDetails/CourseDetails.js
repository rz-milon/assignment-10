import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const [course, setCourse] = useState([]);

    useEffect((params) => {
        fetch(`https://assignment-10-server-liard.vercel.app/course`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);



    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                <div className="grid gap-16 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-4xl">
                    <h2 className='text-slate-500 font-semibold text-3xl py-10'>COURSE DETAILS</h2>
                    <div className='mb-6'>
                        {
                            course.map(courseDetails => <div key={courseDetails.id} className='bg-gray-200 hover:shadow-xl shadow-gray-900 rounded-xl lg:mb-11'>
                                <div className="card">
                                    <figure><img className='w-3/4 h-60' src={courseDetails.thumbnail_url} alt="Img" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-3xl font-semibold text-blue-500 py-3 tracking-wide ">{courseDetails.title}</h2>
                                        <span className='text-xl font-semibold text-left'>Course Overview</span>
                                        <p className='text-left'>{courseDetails.course_overview}</p>
                                        <span className='text-xl font-semibold text-left mt-5'>Course Details</span>
                                        <p className='text-left'>{courseDetails.details}</p>

                                        <div className='flex justify-around align-middle items-center p-5'>
                                            <div>
                                                <p className='text-violet-600 text-5xl font-bold p-5'>{courseDetails.price}</p>
                                            </div>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;