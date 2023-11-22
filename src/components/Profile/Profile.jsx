import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user, 'user form profile')
    return (
        <div>
            <h2 className="text-xl font-bold text-center">{user?.displayName}</h2>
            <figure>
                <figure className="flex justify-center"><img src={user?.photoURL} alt="" /></figure>
            </figure>
        </div>
    );
};

export default Profile;