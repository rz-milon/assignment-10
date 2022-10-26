import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Course = () => {
    const [courseItems, setCourseItems] = useState([]);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-items')
            .then(res => res.json())
            .then(data => setCourseItems(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div className='bg-gray-100'>
            <div className='grid lg:grid-cols-12  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10'>
                <div className='grid lg:col-span-9 md:cols-span-12 '>
                    <h2 className='text-slate-500 font-semibold text-2xl py-10'>COURSE DETAILS</h2>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 lg:px-8'>
                        {
                            course.map(c => <div key={c.id}className='bg-white hover:shadow-xl shadow-gray-900 rounded-xl'>
                                <div className="card">
                                    <figure><img src={c.thumbnail_url}alt="course" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-xl font-semibold text-blue-500 py-3 tracking-wide ">{c.title}</h2>
                                        <p className='text-left'>{c.course_overview.length > 200 ? c.course_overview.slice(0, 150) + "..." : c.course_overview}</p>
                                        <div className="card-actions justify-center mt-5">
                                            <button className="btn btn-outline btn-info "><Link to={'/courseDetails'}>Course Details</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className='grid lg:col-span-3 md:cols-span-12 lg:px-8'>
                    <div className='border-l'>
                        <h1 className='text-gray-800 font-bold text-xl py-10 '>Course Titles</h1>
                        {
                            courseItems.map(course => <p key={course.id} className=''>
                                <button className="btn btn-active btn-link" to={`/courseItems/${course.id}`}>{course.name}</button>
                            </p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;