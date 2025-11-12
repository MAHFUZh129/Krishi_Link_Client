import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const auth=getAuth(app)

 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


      const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

     const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // const profileUpdate=()=>{
    //        setLoading(true);
    //      return updateProfile(user,
    //          {
    //   displayName: formData.name,
    //   photoURL: formData.photoURL,
    // })

    // }

    const profileUpdate = (profileData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profileData)
      .then(() => {
        // firebase user object update করার পর UI refresh করার জন্য
        setUser({ ...auth.currentUser });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };


    const login=(email, password)=>{
                  setLoading(true)
        return signInWithEmailAndPassword( auth,email, password)

    }

    const logout =()=>{
        return signOut(auth)

    }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

     const authInfo = {
       createUser,user,setUser,loading,signInUser,
       signInWithGoogle,login,logout,profileUpdate
       
     }
    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;