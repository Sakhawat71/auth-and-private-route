import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState('Hola Amigo')
    const authinfo = {user,setUser}

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



