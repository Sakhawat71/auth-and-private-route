import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)


    const handelRegister = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
        })
        .catch(error =>{
            console.log(error.code)
            console.log(error.message)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>


                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body lg:w-[450px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required />
                        </div>

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

                            <div className="flex justify-center items-center mt-2">
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                    name="agree"
                                    id="" />
                                <label htmlFor="agree" className="ml-2">
                                    Agreeing to our <a className="underline text-green-600 cursor-pointer">Terms of Service</a> and <a className="underline text-green-600 cursor-pointer">Privacy Policy</a></label>
                            </div>
                        </div>


                        <div className="form-control mt-6 mb-2">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <p >Already have an account?
                            <Link to="/login">
                                <button className="btn btn-sm ml-1">Login</button>
                            </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;