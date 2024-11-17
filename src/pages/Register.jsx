import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log({name,email,password});
        createNewUser(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            updateUserProfile({displayName:name,photoURL:photo})
            .then(()=>{
                navigate('/')
            }).catch((error) => {
                console.log(error);
              })
            console.log('Signed up ',user);
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
                <h3 className='text-center text-5xl font-bold'>Register</h3>
                <div className="mx-auto">
                <form className="card-body shadow-lg rounded-lg" onSubmit={handleRegister}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="Enter Your Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder=" Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control my-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="form-control flex flex-row gap-3">
                    <label className="label">
                        <span className="label-text">Already Have An Account? <NavLink className='text-blue-600 font-bold hover:text-purple-800' to='/auth/login'>Login</NavLink> </span>
                    </label>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;