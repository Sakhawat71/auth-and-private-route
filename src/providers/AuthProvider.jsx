import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    const authinfo = { user, createUser ,signinUser}
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



