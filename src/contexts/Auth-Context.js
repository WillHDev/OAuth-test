import React, { 
    useContext, 
    useState,
    useEffect } from 'react'
import { auth } from '../firebase/firebase.utils';

const AuthContext = React.createContext();


//fn that allows us to use this context
export function useAuth() {
    return useContext(AuthContext);
}

export  function AuthProvider( { children } ) {
const [ currentUser, setCurrentUser ] = useState();
const [ loading, setLoading ] = useState(true);


//Can do this without firebase, just change these
//two functions to log to the server instead
function signUp(email, password) {
    //will return a promise that we can use inside Signup component
    //to show error message or rd user to correct page
    return auth.createUserWithEmailAndPassword(email, password);

}

function logIn(email, password) {
    //will return a promise that we can use inside Signup component
    //to show error message or rd user to correct page
    return auth.signInWithEmailAndPassword(email, password);

}

useEffect(() => {
    //onAuthStateChanged returns a method that when we call the method
    //it will unsubscribe this onAuthStateChanged event

    //currentUse starts out as null and then sets itself
    //
const unsubscribe = auth.onAuthStateChanged(user => {
    setCurrentUser(user);
    setLoading(false);
   
});
//going to unsubscribe us from the onAuthChanged listener whenever we 
//unmount this component
return unsubscribe;
}, [])


    const value = {
        currentUser,
        signUp, 
         logIn
    }
    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}
