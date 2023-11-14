import React, { useContext } from 'react'
import { AuthContex } from '../Provider/Authprovider';

const useAuth = () => {
    const authutils = useContext(AuthContex);
    return authutils;
}

export default useAuth
