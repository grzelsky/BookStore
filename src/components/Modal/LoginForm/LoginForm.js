import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import "./LoginForm.scss";
const LoginForm = () => {
  const { handleAdminLogged, users, modalOn } = useContext(StoreContext);
  const [wrongData, setWrongData] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleChangeUser = (e) => {
    setUserName(e.target.value);
    setWrongData(e.target.value);
  };
  const handleChangePassword = (e) => setUserPassword(e.target.value);

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (userName === "" || userPassword === "") {
      alert("wrong login data");
      return;
    } else if (userName !== wrongData || userPassword !== wrongData) {
      alert("wrong login data");
      return;
    }
    const adminNameData = users.find((admin) => admin.username === userName);

    const adminPasswordData = users.find(
      (admin) => admin.password === userPassword
    );

    const adminName = adminNameData.username;
    const adminPassword = adminPasswordData.password;

    if (adminName === userName && adminPassword === userPassword)
      handleAdminLogged();
    modalOn();
  };

  return (
    <form className="loginForm" onSubmit={submitLoginForm}>
      <label htmlFor="admin">
        <input
          type="text"
          id="admin"
          placeholder="login"
          name="username"
          value={userName}
          onChange={handleChangeUser}
        />
        <input
          type="password"
          id="admin"
          placeholder="password"
          name="password"
          value={userPassword}
          onChange={handleChangePassword}
        />
        <button>Log in</button>
      </label>
    </form>
  );
};

export default LoginForm;
