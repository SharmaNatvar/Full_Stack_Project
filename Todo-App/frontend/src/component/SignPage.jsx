import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



const SignPage = () => {

  const [value , setValue] = useState(true)
  console.log(value);

  return (
    <>
      <div className="container" >
      <div>
      </div>
        <div style={{ height: "90vh" }} className="d-flex flex-column align-items-center">
        {
          value?<h2 className="m-5">LogIn </h2>:
        <h2 className="m-5">SignUp</h2>
        }
          <form className="p-4 border border-info-subtle rounded" style={{maxWidth:'400px' }}>
          {
          value?'':<div>
          <label id="icon" for="name"><FaUser /></label>
        <input type="text" name="name" id="name" placeholder="Name" required/><br/></div>
        }

            <label id="icon" for="name"><MdEmail /></label>
        <input type="text" name="name" id="name" placeholder="Email" required/><br/>

        <label id="icon" for="name"><RiLockPasswordFill /></label>
        <input type="password" name="name" id="name" placeholder="Password" required/>
       

            <div className="form-text mb-3">
                We'll never share your Details with anyone else.
              </div>

            <div className="form-text mb-3">
               {
                value?<p> Not Account <span style={{cursor:"pointer"}} onClick={()=>setValue(false)}>SignUp</span> </p>:
               <p> Already Account <span style={{cursor:"pointer"}} onClick={()=>setValue(true)}>Login </span> </p>
               }
              </div>
{
  value?            <button type="submit" className="btn btn-primary">
              Submit
            </button>:
            <button type="submit" className="btn btn-primary">
              Create
            </button>
}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignPage;
