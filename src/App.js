import { useState } from "react";
import "./App.css";

function App() {
  //regular expression for email validation
  let regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  
  //state of the Username Email Password
  var [userName, setUserName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  //boolean for form submission alert
  var [isSubmit, setSubmit] = useState(false);

  //boolean for username and email error alert
  var [userNameOk, setUserNameOk] = useState(true);
  var [emailOk, setEmailOk] = useState(true);
  
  
  //Validating Username
  function dealUserName(e) {
    setUserName(e.target.value);
    console.log(userName);

    if (userName.match(/^[a-zA-Z]+$/)) {
      console.log("good username");
      setUserNameOk(true);
    } else {
      setUserNameOk(false);
    }
  }

  //validationg Email
  function dealEmail(e){
    setEmail(e.target.value);
    if (regexEmail.test(email)) {
      console.log("good Email");
      setEmailOk(true);
    } else {
      setEmailOk(false);
    }


  }

  //handling the submission of form
  function handleSubmit(e)
  {
    e.preventDefault();
    if(!(userName===""||email===""||password===""))
    {
      if(userNameOk&&emailOk)
      {
        setSubmit(true);
      }
    }
    else{
      alert("The form field cannot be empty ")
    }
    
  }

  return (
    <div className="container  mt-5">
      {isSubmit ? (
            <div
              className="alert alert-success text-success text-center"
              role="alert"
            >
              Login Successful
            </div>
          ) : (
            <p></p>
          )}
      <h1 className="text-primary">Login Form</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="form-group">
          <label>
            <b>User Name:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            onChange={(e) => {
              dealUserName(e);
            }}
          />
          {!userNameOk ? (
            <div
              className="alert alert-danger text-danger text-center"
              role="alert"
            >
              The username field can only have A-Z or a-z characters
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <div className="form-group">
          <label>
            <b>Email address:</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address"
            onChange={(e)=>{dealEmail(e)}}
          />
          {!emailOk ? (
            <div
              className="alert alert-danger text-danger text-center"
              role="alert"
            >
              The email format is incorrect!!
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <div className="form-group">
          <label>
            <b>Password:</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your email password"
            onChange={(e) => {
              setPassword(e.target.value);
              if(password)
              {
                
              }
            }}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default App;
