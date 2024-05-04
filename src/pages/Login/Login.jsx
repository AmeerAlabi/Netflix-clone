import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Login.css';
import { login , signUp } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

function Login() {
  const [signState, setSignState] = useState("sign in");
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [loading , setLoading] = useState(false)

 const user_auth = async (event) => {
  event.preventDefault();
  setLoading(true);
   if(signState==="sign in"){
    await login (email , password);
   } else {
    await signUp(name , email , password);
   }
   setLoading(false)
 }

  return (
    loading?<div className="w-[]100% h-[100vh] flex items-center justify-center " >
      <img src={netflix_spinner} alt="" className=' w-[60px] ' />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='w-[150px] xs:w-[75px] ' />
      <div>
        <form className='w-[400px] bg-black bg-opacity-75  rounded-[4px] pt-[20px] m-auto pb-[15px] mt-3 xs:p-[10px] xs:mt-[2px] xs:w-[300px] '>
          <h2 className="text-[32px] font-semibold mb-[28px] text-white p-2 ml-8">{signState}</h2>
          <div className='flex justify-center flex-col items-center'>
          {signState === "sign Up" && (
            <input type="text" value={name} onChange={(e) => { setName(e.target.value)}} placeholder='Your Name' className='w-[350px] xs:w-[200px] h-[50px] text-white text-[16px] bg-[#333] rounded-md mt-[5px] outline-none p-2' />
          )}
            <input type="email"  value={email} onChange={(e) => {setEmail(e.target.value)}}    placeholder='Email' className='w-[350px] xs:w-[200px] m-auto h-[50px] text-white text-[16px] bg-[#333] rounded-md mt-[20px] outline-none p-2 xs:mt-[10px]' />
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' className='w-[350px] xs:w-[200px] h-[50px] text-white text-[16px] bg-[#333] rounded-md mt-[20px] outline-none p-2 xs:mt-[10px]' />
            <button onClick={user_auth} type='submit' className='border-none outline-none px-[16px] h-[45px] bg-[#e50914] xs:w-[200px] text-[16px] mt-[20px] rounded-md text-white cursor-pointer w-[350px]'>
              {signState}
            </button>
          </div>
          <div className='flex justify-around items-center mt-[20px] xs:mt-[8px]'>
            <div className='flex items-center gap-[5px]'>
              <input type="checkbox" id="rememberMe" className='w-[18px] h-[18px]' />
              <label htmlFor="rememberMe" className='text-white'>Remember me</label>
            </div>
            <p className="text-gray-700">Need Help?</p>
          </div>
          <div className="mt-[10px]">
            {signState === "sign in" ? (
              <p className="text-[#333] ml-7 mt-2">Already have an account? <span className="text-white" onClick={() => setSignState("sign Up")}>Sign Up Now</span></p>
            ) : (
              <p className="text-[#333] ml-7 mt-2">New to Netflix? <span className="ml-[6px] text-white" onClick={() => setSignState("sign in")}>Sign In Now</span></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
