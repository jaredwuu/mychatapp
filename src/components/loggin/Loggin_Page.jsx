import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'
import Input from './Input'


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Loggin_Page = () => {
    

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setisSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }

    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    const switchMode = () => {
        setisSignup((preIsSignup) => !preIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res.profileObj;
        const token = res.tokenId;
         
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/auth');
        } catch (error) {
            console.log(error);
        }

    }

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful");
    }



    return (
        <div className='flex justify-center h-screen items-center bg-gray-500'>
            <div className='py-5 mx-auto center h-auto w-96 border-gray-900 border-2 rounded' >

                <div className='text-indigo-900 text-3xl py-2 font-bold'>
                    Log in to My Chanel
                </div>
                <div className='py-2'>
                    <hr className='w-80 mx-auto' />
                </div>


                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className='flex px-6 py-2'>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
                        </div>

                    )}
                    <div className='px-6 py-2'>
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    </div>
                    <div className='px-6 py-2'>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </div>

                    <div className='px-6 py-2'>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </div>

                    <div className='py-2'>
                        <button type="submit" className='py-1 px-2 bg-indigo-400 rounded-full w-72 cursor-pointer hover:bg-blue-600 text-white outline-none'>{isSignup ? 'Sign Up' : 'Sign In With Your Email'}</button>
                    </div>

                </form>

                <div className='py-2 flex justify-center'>
                    <div className='py-3'>
                        <hr className='w-32' />
                    </div>
                    <p className='px-4'>or</p>
                    <div className='py-3'>
                        <hr className='w-32' />
                    </div>
                </div>

                <GoogleLogin
                    clientId="1057041269188-54u3igab5ji1rlmkcudjsjselsgurpls.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                            className='py-1 px-2 bg-gray-700 rounded-full w-72 cursor-pointer hover:bg-gray-900 text-white outline-none'
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            Google Sign In
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />

                <div className='py-2'>
                    <input className='py-1 px-2 bg-gray-700 rounded-full w-72 cursor-pointer hover:bg-gray-900 text-white outline-none' type="button" value="Loggin in..." />
                </div>

                <div className="relative py-3">
                    <button className="absolute right-5 px-2 hover:bg-gray-200 outline-none rounded " onClick={switchMode}>{isSignup ? 'Already hava an account? Sign In' : "Don't hava an account? Sign Up"}</button>
                </div>

            </div>

        </div>
    )
}

export default Loggin_Page
