import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext(null)
 
const AuthProvider = ({children}) => {
    const [test,setTest] = useState('')
    const authinfo = {test,setTest}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;



