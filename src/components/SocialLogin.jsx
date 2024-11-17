import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import app from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';

const auth = getAuth(app);

const SocialLogin = () => {
    // const location = useLocation()
    const {user,setUser,logOut} = useContext(AuthContext);
    const handleSignInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            setUser(null);
        })
    }
    const handleSignInWithGithub = ()=>{
        const provider = new GithubAuthProvider();
        signInWithPopup(auth,provider)
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            setUser(null);
        })
    }
    return (
        <div className='my-5'>
            { user && user?.email  ? 
            <button onClick={logOut} className="btn btn-warning flex w-full">LogOut</button> 
            // (location.pathname.startsWith('/news/') && 
            // <button onClick={logOut} className="btn btn-warning flex w-full">LogOut</button> 
            // ) 
            :
            <>
                <h2 className="font-semibold mb-3">Login With</h2>
            <div className='grid gap-2'>
                <button className='btn' onClick={handleSignInWithGoogle}><FaGoogle/> Login With Google</button>
                <button className='btn'><FaGithub/> Login With Github</button>
            </div>
            </>

        }
            
        </div>
    );
};

export default SocialLogin;