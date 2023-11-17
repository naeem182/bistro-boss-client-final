import React, { useContext } from 'react'
import { AuthContext } from '../Provider/Authprovider';

const useAuth = () => {
    const authutils = useContext(AuthContext);
    return authutils;
}

export default useAuth
