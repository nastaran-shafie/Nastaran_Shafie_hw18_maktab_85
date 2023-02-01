import { useState } from "react";
import "../form/form.css";
function Form() {
  // stats-----------------------------------------------------------------------------------------------------
  const [userName, setUserName] = useState<any>(" ");
  const [fristName, setFristName] = useState<any>(" ");
  const [lastName, setLastName] = useState<any>(" ");
  const [email, setEmail] = useState<any>(" ");

  // function change user name---------------------------------------------------------------------------------
  const usernameChange = (e: any) => {
    setUserName(e.target.value);
  };
  // function change name------------------------------------------------------------------------------------
  const nameChange = (e: any) => {
    setFristName(e.target.value);
  };
  //   function last name change------------------------------------------------------------------------------
  const lastNameChange = (e: any) => {
    setLastName(e.target.value);
  };
  //   function onchange email----------------------------------------------------------------------------------
  const emailChange = (e: any) => {
    setEmail(e.target.value);
  };
  //   submit form---------------------------------------------------------------------------------------
  const submitForm = (e: any) => {
    e.preventDefault();
    const obj = {
      userName: userName,
      fristName: fristName,
      lastName: lastName,
      email: email,
    };
    console.log(obj);
  };
  //   form return----------------------------------------------------------------------------------------------
  return (
    <div className="container">
      <form className="containerForm">
        <div className="header">
          {" "}
          <h1>Create account</h1>
          <p>Already have an account?</p>
        </div>
        <input type="text" placeholder="username" onChange={usernameChange} />
        <div className="nameContainer">
          <input type="text" placeholder="frist name" onChange={nameChange} />
          <input
            type="text"
            placeholder="last name"
            onChange={lastNameChange}
          />
        </div>
        <input
          type="emai"
          name=""
          id=""
          placeholder=" email"
          onChange={emailChange}
        />
        <button onClick={submitForm}>sign up</button>
        <div className="footer">
          {" "}
          <input type="checkbox" />
          <p>
            I have read and agree to the <span>Terns of Services</span>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Form;
