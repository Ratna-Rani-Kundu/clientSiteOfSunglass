import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const[authError,setAuthError] =useState('')
    const[admin,setAdmin] =useState(false)

    const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();
     //google sign in
     const googleSignIn = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              const user = result.user;
              saveUser(user.email, user.displayName, 'PUT');
              setAuthError('');
              const destination = location?.state?.from || '/';
              history.replace(destination);
          }).catch((error) => {
              setAuthError(error.message);
          }).finally(() => setIsLoading(false));
  }
    
    const registerUser=(email,password,name,history)=>{
       setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setAuthError('');
            const newUser={email,displayName:name};
            setUser(newUser)

            //save user to database
             saveUser(email,name,'POST')

            //send data to firebase
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message)
          
          })
          .finally(()=>setIsLoading(false));
    }
    const loginUser=(email,password, location, history)=>{
      setIsLoading(true)
    
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const destination =location?.state?.from  || "/" ;
         history.replace(destination)
          setAuthError('')
        })
        .catch((error) => {
          setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }
 
    //observer
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
            
              // const uid = user.uid;
               setUser(user)
            } else {
            setUser({})
            }
            setIsLoading(false)
          }); 
          return ()=>unSubscribe
    },[auth])

    useEffect(()=>{
      fetch(`https://murmuring-lowlands-25266.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])
    const logout=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false)); 
    }
    const saveUser=(email,displayName,method)=>{
        const user={email,displayName}
        fetch('https://murmuring-lowlands-25266.herokuapp.com/users',{
          method:method,
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }
   return {
       user,
       admin,
       isLoading,
       registerUser,
       loginUser,
       googleSignIn,
       logout,
       authError,


   }
};

export default useFirebase;