import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">This is Home</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default Home;