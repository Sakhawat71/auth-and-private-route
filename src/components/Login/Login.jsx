import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const { signinUser } = useContext(AuthContext)

    const handelLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signinUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
            })
            .catch(error => {
                console.log(error.code)
                console.log(error.message)
            })

    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>


                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body lg:w-[400px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required />

                            <label className="label">
                                <Link
                                    href="#"
                                    className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>


                        <div className="form-control mt-6 mb-2">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p >Don`t have an account? <Link to="/register">
                            <button className="btn btn-sm ml-1">Register</button>
                        </Link> </p>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Login;