import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "./Admin";
const LoginPage = () => {
  const { setIsLogin } = useContext(login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningUserName, setWarningUserName] = useState(false);
  const [warningPassWord, setWarningPassWord] = useState(false);
  const handleWarning = (title) => {
    if (title === "Username") {
      if (username === "") setWarningUserName(true);
      else setWarningUserName(false);
    } else if (title === "Password") {
      if (password === "") setWarningPassWord(true);
      else setWarningPassWord(false);
    } else {
      setWarningUserName(true);
      setWarningPassWord(true);
    }
  };
  const Input = ({
    title,
    placeholder,
    setInput,
    initialInput,
    warning,
    handleWarning,
  }) => {
    let show = warning ? "block" : "none";
    let color = warning ? "red" : "";
    const inputCSS = "border-2 text-lg w-80 px-2 py-1 block";
    let type = title === "Password" ? "password" : "text";
    return (
      <div className="relative">
        <label htmlFor="username">{title}</label>
        <input
          style={{ borderColor: color }}
          type={type}
          name={title}
          placeholder={placeholder}
          className={inputCSS}
          value={initialInput}
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => handleWarning(title)}
        />
        <span
          style={{ display: show }}
          className="font-sans text-red-600 text-lg pl-1 absolute "
        >
          <i>Please enter {title.toLowerCase()}!</i>
        </span>
      </div>
    );
  };
  // useEffect(() => {
  //   const postRequest = async (username, password) => {
  //     const URL = "http://localhost:5000/admin";
  //     const response = await axios.post(URL);
  //     const data = response.data.data;

  //     setData(data[0]);
  //   };
  //   postRequest();
  // }, []);
  const handleLogin = async (e) => {
    const URL = "http://localhost:5000/admin";
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const response = await axios.post(URL, formData);
    if (response.data.status === "OK") setIsLogin(true)
    else alert('Sai thông tin tài khoản')
  };
  return (
    <div className="bg-gray-200 w-screen h-screen flex flex-col items-center ">
      <div className="w-36 h-36 mt-10">
        <img src="/prev.png" alt="img logo" className="w-full h-full" />
      </div>
      <h1 className="text-5xl ">Welcome to Admin Page</h1>
      <form className="mt-14 bg-gray-100 border-2 p-10 flex flex-col text-xl gap-6">
        {Input({
          title: "Username",
          placeholder: "Nhập tên người dùng",
          setInput: setUsername,
          initialInput: username,
          warning: warningUserName,
          handleWarning: handleWarning,
        })}
        {Input({
          title: "Password",
          placeholder: "Nhập mật khẩu",
          setInput: setPassword,
          initialInput: password,
          warning: warningPassWord,
          handleWarning: handleWarning,
        })}

        <Link
          to={"/admin/dashboard"}
          className="self-center bg-[#04AA6D] px-8 py-2 mt-6 hover:opacity-60"
          onClick={(e) => {
            e.preventDefault();
            if (username === "") setWarningUserName(true);
            else if (password === "") setWarningPassWord(true);
            else handleLogin(e);
          }}
        >
          Đăng nhập
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
