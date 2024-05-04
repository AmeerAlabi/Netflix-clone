import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/player'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false); // Set loading to false once authentication state is resolved
      if (user) {
        console.log("User logged in");
        navigate('/');
      } else {
        console.log("User logged out");
        navigate('/login');
      }
    });

    // Clean up subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <>
    <ToastContainer theme='dark' />

   
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
    
    </>
  );
}

export default App;
