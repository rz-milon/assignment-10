import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseTopics from '../CourseTopics/CourseTopics';



const Course = () => {
    const [courseTopics, setCourseTopics] = useState([]);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-liard.vercel.app/course-topics')
            .then(res => res.json())
            .then(data => setCourseTopics(data))
    }, []);


    useEffect((params) => {
        fetch(`https://assignment-10-server-liard.vercel.app/course`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);


    return (
        <div className='bg-gradient-to-r from-violet-200 to-fuchsia-400 pb-24'>
            <div className='grid lg:grid-cols-12  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 '>
                <div className='grid lg:col-span-9 md:cols-span-12 '>
                    <h2 className='text-slate-600 font-semibold text-2xl py-24'>COURSE FEATURES</h2>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 lg:px-8 '>
                        {
                            course.map(courseSummary => <div key={courseSummary.id}className='bg-white hover:shadow-xl shadow-gray-900 rounded-xl'>
                                <div className="card">
                                    <figure><img className='w-3/4 h-40' src={courseSummary.thumbnail_url}alt="course" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-xl font-semibold text-blue-500 py-3 tracking-wide ">{courseSummary.title}</h2>
                                        <p className='text-left'>{courseSummary.course_overview.length > 200 ? courseSummary.course_overview.slice(0, 150) + "..." : courseSummary.course_overview}</p>
                                        <div className="card-actions justify-center mt-5">
                                            <Link to={`/courseDetails/`}><button className="btn btn-outline btn-info ">Course Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className='grid lg:col-span-3 md:cols-span-12 lg:px-8'>
                    <div className='border-l'>
                        <h1 className='text-gray-700 font-bold text-xl pt-28 pb-12'>Course Titles</h1>
                        
                        {
                            courseTopics.map(topic =><CourseTopics key={topic.id} topic={topic}></CourseTopics>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;