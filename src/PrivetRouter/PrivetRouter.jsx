import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {

    const {user, isLoading} = useContext(AuthContext)
    
    if(isLoading){
        return <span className="loading loading-bars loading-lg flex items-center justify-center"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

PrivetRouter.propTypes = {
    children: PropTypes.node,
};

export default PrivetRouter;