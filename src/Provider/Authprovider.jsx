import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config"

export const AuthContex = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const createuser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setloading(true);
        return signOut(auth)
    }

    //user ase ki na
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            console.log("user in the currnt state", currentuser);
            setloading(false)
        })
        return unsubscribe;
    }, [])
    const authinfo = {
        user,
        loading,
        createuser,
        signin,
        logout,

    }



    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
