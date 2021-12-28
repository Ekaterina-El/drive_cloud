import React from "react";

const Login = ({email, password, changeEmail, changePassword, loginUser, isFetching}) => {
  const handleChangeEmail = e => changeEmail(e.target.value)
  const handleChangePassword = e => changePassword(e.target.value)

  return (
    <div>
      <input type="text" value={email} onChange={handleChangeEmail}/>
      <input type="password" value={password} onChange={handleChangePassword} />
      <button onClick={loginUser} disabled={isFetching}>Войти</button>
    </div>
  );
};

export default Login;
