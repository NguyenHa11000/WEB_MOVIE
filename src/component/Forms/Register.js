import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import FormLogin from "./Login";

const FormRegister = (props) => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [username, setUsername] = useState("");
  // const [member, setMember] = useState([]);
  const clearform = () => {
    setUsername("");
    setPassword("");
    setRePassword("");
  };
  const checkInfo = (e) => {
    if (password === "" || rePassword === "" || username === "") {
      alert("KHONG DUOC DE TRONG");
    } else {
      if (rePassword !== password) {
        alert("MAT KHAU NHAP LAI KHONG KHOP");
      } else {
        // console.log(member)
        let info = localStorage.getItem("info")
          ? JSON.parse(localStorage.getItem("info"))
          : [];
        info.push({ username: username, password: password });
        localStorage.setItem("info", JSON.stringify(info));
        e.preventDefault();
        props.setIsHidden(true);
        props.setIsLogin(false);
        clearform();
        alert("bạn đã đăng ký thành công");
      }
    }
  };
  return (
    <>
      <div className="container-login" hidden={props.isHidden}>
        <form className="form_login">
          <h1>Đăng Ký</h1>
          <div className="form_text">
            <label for="#">Tên đăng nhập</label>
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>
          <div className="form_text">
            <label for="#">Mật khẩu</label>
            <input
              type="text"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <div className="form_text">
            <label for="#">Nhập lại mật khẩu</label>
            <input
              type="password"
              value={rePassword}
              onChange={(event) => {
                setRePassword(event.target.value);
              }}
            ></input>
          </div>
          <button onClick={(e) => checkInfo(e)}>Đăng ký</button> <br />
        </form>
      </div>
    </>
  );
};

export default FormRegister;
