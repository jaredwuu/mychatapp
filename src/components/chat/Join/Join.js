import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar'
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div>
            <Navbar /> 
            <div className="flex justify-center h-screen items-center bg-gray-900">

                <div className="w-1/5">                
                    
                    <h1 className="text-white text-4xl pb-5 border-b-2 border-white">Join</h1>
                    <div className="py-5">
                        <input placeholder="Enter Your Name" className="rounded-none py-4 px-4 w-full border-b-2 border-gray-900 outline-none" type="text"
                            onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className='py-2'>
                        <input placeholder="Enter The Room Number" className="rounded-none py-4 px-4 w-full border-t-2 border-gray-900 outline -none" type="text"
                            onChange={(event) => setRoom(event.target.value)} /></div>
                    <Link
                        onClick={event => (!name || !room) ? event.preventDefault() : null}
                        to={`/chat?name=${name}&room=${room}`}>
                        <button className="text-white uppercase bg-blue-500 px-4 py-2 w-full inline-block mt-5 rounded hover:bg-blue-700 focus:outline-none" type="submit"> Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join