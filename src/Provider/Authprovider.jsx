import { createContext, useState } from "react"

export const AuthContex = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)


    const authinfo = {
        user,
        loading,

    }



    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
