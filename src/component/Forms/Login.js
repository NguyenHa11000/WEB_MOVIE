import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const FormLogin = (props) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const clearform = () => {
    setUsername("");
    setPassword("");
  };
  const handleClick = (e) => {
    if (password == "" || username == "") {
      alert("KHONG DUOC DE TRONG");
    } else {
      let info = localStorage.getItem("info")
        ? JSON.parse(localStorage.getItem("info"))
        : [];
      var d = 0;
      info.forEach((element) => {
        if (element.username == username && element.password == password) {
          d = 1;
          sessionStorage.setItem("username", username);
          props.setUsername(username);
          e.preventDefault();
          clearform();
          props.setIsLogin(true);
        }
        console.log(element);
      });
      if (d == 0) {
        alert("Thong tin dang nhap k hop le");
      }
    }
    // else{navigate('/')}
  };
  return (
    <>
      <div className="container-login" hidden={props.isLogin}>
        <form className="form_login">
          <h1>Đăng nhập</h1>
          <div className="form_text">
            <label for="#">Username</label>
            <input
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>
          <div className="form_text">
            <label for="#">Password</label>
            <input
              type="text"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <button onClick={(e) => handleClick(e)}>Đăng nhập</button> <br />
          {/* <span>
            Đăng ký <Link to="/Register">Tại đây</Link>
          </span> */}
        </form>
      </div>
    </>
  );
};

export default FormLogin;
