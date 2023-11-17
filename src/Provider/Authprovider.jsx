import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config"

export const AuthContex = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createuser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        setloading(true);
        return signOut(auth)
    }
    // upprofile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
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
        googleSignIn,
        updateUserProfile


    }



    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
