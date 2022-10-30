import { Link, } from 'react-router-dom';


const CourseTopics = ({topic}) => {
    const {name, id} = topic;


    return (
        <div>
            <button className="btn btn-active btn-link"><Link to={`/courseDetails/`}>{name}</Link></button>
        </div>
    );
};

export default CourseTopics;