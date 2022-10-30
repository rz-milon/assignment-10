import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="">Email address</label>
                <input type="email" value={user?.email } placeholder="Enter email" />
            </div>

            <div className="mb-3">
                <label htmlFor="">Your Name</label>
                <input onChange={handleNameChange} type="text" value={name} placeholder="Name" />
            </div>

            <div className="mb-3">
                <label htmlFor="">Photo URL</label>
                <input ref={photoURLRef} value={user?.photoURL} type="text" placeholder="Photo URL" />
            </div>

            <div className="mb-3">
                <button className='btn btn-primary' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Profile;