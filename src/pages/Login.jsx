import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {logIn,setUser} = useContext(AuthContext);
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        logIn(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            console.log('Signed In ',user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    }
    return (
        <div className='min-h-fit flex justify-center items-center py-10'>
            <div className="w-1/3 mx-auto my-4">
                <h3 className='text-center text-5xl font-bold'>Login</h3>
                <div className="mx-auto">
                <form className="card-body shadow-lg rounded-lg" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control my-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control flex flex-row gap-3">
                    <label className="label">
                        <span className="label-text">Don't Have An Account? <NavLink className='text-blue-600 font-bold hover:text-purple-800' to='/auth/register'>Register</NavLink> </span>
                    </label>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;