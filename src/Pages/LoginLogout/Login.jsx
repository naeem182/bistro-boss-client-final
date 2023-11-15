import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,

    validateCaptcha,
} from 'react-simple-captcha';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { signin } = useAuth()
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!error) {
            console.log(email, password);
            // Perform login or other actions
        } else {
            console.log('Login not allowed due to captcha error');
        }
        signin(email, password)
            .then(res => {
                console.log("login succesfully")
                // navigate(location?.state ? location.state : '/');
                navigate(from, { replace: true });
                Swal.fire({
                    warning: "success",
                    title: 'Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    };

    const handleValidateCaptcha = (e) => {
        setError('')
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setError('');
        } else {
            setError('Captcha does not match');
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                onBlur={handleValidateCaptcha}
                                type="text"
                                name="captcha"
                                placeholder="type the captcha above"
                                className="input input-bordered"
                            />
                            {error && <p className="text-red-500">{error}</p>}

                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p><small>New in our account? <Link to="/signup">Sign Up</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
