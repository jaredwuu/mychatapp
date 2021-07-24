import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user.token;
        //JWT
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);

    return (
        <div className='bg-gray-900'>
            <div className=''>
                {user ? (
                    <div className='flex justify-center py-2' >
                        <Avatar className='hover:text-red-500' alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)} {user.result.name.charAt(1)}
                        </Avatar>
                        <p className='pt-2 px-2 hidden text-white md:block'>{user.result.name} </p>
                        <button className='bg-red-300 px-2 hover:bg-red-500 rounded' onClick={logout}> Logout </button>
                    </div>
                ) : null
                }
                {/* {user.result._id? user.result._id:user.result.googleId} */}
            </div>
        </div>
    )
}

export default Navbar
