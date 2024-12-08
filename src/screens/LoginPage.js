import React from "react";
import LoginForm from "../components/forms/LoginForm";

const LoginPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const LoginBorderStyle = {
  border: "solid 1px rgb(249, 209, 184)",
  borderRadius: "10px",
  boxShadow: "5px 10px rgb(183, 183, 183)",
  padding: "20px",
};

const LoginPage = (props) => {
  return (
    <>
      <div style={LoginPageStyle}>
        <div style={LoginBorderStyle}>
          <LoginForm user={props.user} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
