import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-3xl font-bold text-red-500">Page not found</h1>
            <Link className="btn text-blue-700 " to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;