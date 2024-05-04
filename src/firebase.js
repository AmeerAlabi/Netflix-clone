
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAmUWjQ2TylX5kht8vgP_zeqlYcLgKp0Y4",
  authDomain: "netflix-clone-873e9.firebaseapp.com",
  databaseURL: "https://netflix-clone-873e9-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-873e9",
  storageBucket: "netflix-clone-873e9.appspot.com",
  messagingSenderId: "100076478658",
  appId: "1:100076478658:web:54787fde92cb1cbe989b5b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name , email , password) => {
 try{
   const res =  await createUserWithEmailAndPassword(auth , email , password);
   const user = res.user;
   await addDoc(collection(db , "user")  , {
    uid:user.uid,
    name,
    authProvider: "local",
    email,
   })
 }
 catch (error) {
 console.log(error)
 toast.error(error.code.split('/')[1].split('-').join(" "))
 }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const logout  = () => {
    signOut(auth);
}



export {auth , db , login , signUp , logout}