import React, { useState, useRef } from 'react';
import './css/loginsignup.css';

const Loginsignup = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const containerRefSignin = useRef();
  const containerRefSignup = useRef();
  // const containerRefforget = useRef();
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handlebacktosignin = () => {
    containerRefSignup.current.classList.add("hidden");
    containerRefSignin.current.classList.remove("hidden");
  };

  const handlebacktoSignup = () => {
    containerRefSignin.current.classList.add("hidden");
    containerRefSignup.current.classList.remove("hidden");
  };
  const forgetpass = () => {
    containerRefSignin.current.classList.add("hidden");
    containerRefSignup.current.classList.add("hidden");
    containerRefforget.current.classList.remove("hidden");
  };
  // const Submitforget = () => {

  // };

  const Changehandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const Login =async (e) => {
    e.preventDefault();
    console.log("Login Executed", formdata)
    let responsedata ;
    await fetch('https://e-commerce-backend-ten-gray.vercel.app/login', {

      method: "POST",
      headers: {
        Accept: 'application/form-data',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    }).then((res) => res.json()).then((data) => { responsedata = data })

    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token)
      window.location.replace('/')
    } else {
      alert(responsedata.error)
    }

  }
  const SignUp =async (e) => {
    e.preventDefault();
    console.log("SignUp Executed", formdata)
    let responsedata ;
    await fetch("https://e-commerce-backend-ten-gray.vercel.app/signup", {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    }).then((res) => res.json()).then((data) => { responsedata = data })

    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token)
      window.location.replace('/')
    } else {
      alert(responsedata.error)
    }

  }


  return (
    <>
      <div className='flex  items-center justify-center h-[80vh] max-lg:hidden'>
        <div className={`container w-[65%] h-[70%] flex justify-center ${rightPanelActive ? 'right-panel-active' : ''}`}>
          <div className="form-container sign-up-container flex justify-center">
            <form className='' action="#">
              <h1 className='my-2 text-xl'>Create Account</h1>

              <span className='my-2'>or use your email for registration</span>
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='username' value={formdata.username} onChange={Changehandler} type="text" placeholder="Name" />
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='email' value={formdata.email} onChange={Changehandler} type="email" placeholder="Email" />
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' suggested="current-password" name='password' value={formdata.password} onChange={Changehandler} type="password" placeholder="Password" />
              <button className='border my-3 outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-red-300 border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]' onClick={SignUp} type="button">Sign Up</button>
              {/* <button className="ghost border outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-white border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]" id="signIn" onClick={handleSignInClick}>Sign In</button> */}

            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className='' action="#">
              <h1 className='my-2 text-xl'>Sign in</h1>

              <span className='my-2'>or use your account</span>
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='email' value={formdata.email} onChange={Changehandler} type="email" placeholder="Email" />
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='password' suggested="current-password" value={formdata.password} onChange={Changehandler} type="password" placeholder="Password" />
              {/* <a className='my-1' href="#">Forgot your password?</a> */}
              <button className='border my-3 outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-red-300 border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]' onClick={Login} type="button">Login</button>


            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay bg-red-300">
              <div className="overlay-panel gap-4 overlay-left">
                <h1 className='text-xl font-semibold'>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost border outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-white border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]" id="signIn" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className="overlay-panel gap-4 overlay-right">
                <h1 className='text-xl font-semibold'>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghos  border outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-white border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex  items-center justify-center h-[80vh] lg:hidden'>
        <div className='w-[65%] h-[70%] relative'>
          <div ref={containerRefSignup} className="Sign-up-container">
            <form className='' action="#">
              <h1 className='my-2 text-xl'>Create Account</h1>

              <span className='my-2'>or use your email for registration</span>
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='username' value={formdata.username} onChange={Changehandler} type="text" placeholder="Name" />
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='email' value={formdata.email} onChange={Changehandler} type="email" placeholder="Email" />
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='password' suggested="current-password" value={formdata.password} onChange={Changehandler}  type="password" placeholder="Password" />
              <button className='border my-3 outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-red-300 border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]' onClick={SignUp} type="button">Sign Up</button>
              <div>
                <span className='max-sm:text-sm'>Already have an Account ? </span>
                <button className="ghost px-5  py-2 border rounded-full  text-sm outline-none  bg-white border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]" id="signIn" onClick={handlebacktosignin}>Sign In</button>
              </div>
            </form>
          </div>
          <div ref={containerRefSignin} className="Sign-in-container hidden">
            <form className='' action="#">
              <h1 className='my-2 text-xl'>Sign in</h1>

              <span className='my-2'>or use your account</span>
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='email' value={formdata.email} onChange={Changehandler} type="email" placeholder="Email" />
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' name='password' suggested="current-password" value={formdata.password} onChange={Changehandler} type="password" placeholder="Password" />
              {/* <span className='my-1' onClick={forgetpass} >Forgot your password?</span> */}
              <button className='border my-3 outline-none text-base font-medium rounded-[75px] w-[110px] h-[50px] bg-red-300 border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]' onClick={Login} type="button">Login</button>
              <div>
                <span className='max-sm:text-sm'>Don't have an Account ? </span>
                <button className="ghost px-5  py-2 border rounded-full  text-sm outline-none  bg-white border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]" id="signUp" onClick={handlebacktoSignup}>Sign Up</button>
              </div>

            </form>
          </div>
          {/* <div ref={containerRefforget} className="Sign-in-container hidden">
            <form className='' action="#">
              <h1 className='my-2 text-xl'>Enter your Email</h1>

             
              <input className='p-3 my-2 border border-[#7a7a7a] outline-none rounded-lg' type="email" placeholder="Email" />
              
             
              <div>
                <button className="ghost px-5  py-2 border rounded-full  text-sm outline-none   bg-red-300 border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]" id="signUp" onClick={Submitforget}>Get Code</button>
              </div>

            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Loginsignup;

