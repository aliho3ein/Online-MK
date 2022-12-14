import { useContext, useEffect, useState } from "react";
import omContext from "./../context/omContext";

/* */
import instance from "./../api/omApi";

/* Requests */
import { GetWork, togglePopUp } from "./../request";
import { showPass } from "./../actions";

/* Component */
import PopUp from "../component/popUp";
import SingleItem from "../component/singleManageItem";

export default function Manager() {
  let { state, despatch } = useContext(omContext);

  let [users, setUsers] = useState();

  useEffect(() => {
    showPass();
    let userDataCookie = document.cookie.split("=");
    if (userDataCookie[1]) {
      despatch({ type: "setUser", payload: { username: userDataCookie[1] } });
      showUsers();
    }
  }, []);

  /* Add New Crew , work , user */
  let doAction = (act) => {
    despatch({ type: "setAction", payload: { act, key: "" } });
    togglePopUp();
  };

  /* Login User */
  let loginUser = () => {
    let userName = document.getElementById("user").value;
    let passWord = document.getElementById("pass").value;
    let LogMeIn = document.getElementById("stayLogin");

    instance.get("/user.json").then((res) => {
      let users = Object.values(res.data);
      let check = users.find((user) => {
        return user.pass === passWord && user.userName === userName;
      });
      /* Check UserName */
      console.log(check);
      if (check) {
        despatch({ type: "setUser", payload: { username: check.userName } });
        /* Cookie */
        LogMeIn.checked &&
          (document.cookie = `userName=${userName};SameSite=None; Secure`);
        showUsers();
      } else {
        console.log("userName oder Kennwort ist Falsch");
      }
    });
  };

  let showUsers = () => {
    instance.get("/user.json").then((res) => {
      let userList = Object.entries(res.data).map(([key, value]) => {
        return { ...value, key };
      });

      setUsers(userList);
    });
  };

  let changeUser = (key) => {
    if (state.user === "admin") console.log(key);
  };

  return (
    <>
      {!state.user ? (
        <div className="loginPage">
          <div className="loginForm">
            <label to="user">Username</label>
            <input id="user" className="textInput" type="text" />
            <label to="pass">
              Password
              <i className="fa-solid fa-eye-slash"></i>
            </label>
            <input id="pass" className="textInput" type="password" />
            <label to="stayLogin" className="loginLabel">
              <input type="checkbox" id="stayLogin" />
              Angemeldet bleiben
            </label>
            <button onClick={loginUser}>Login</button>
          </div>
        </div>
      ) : (
        <>
          <PopUp />
          <div className="managerArea">
            <div className="myWorkArea">
              <i
                className="fa fa-plus"
                title="Work Hinzufügen"
                onClick={() => doAction("work")}
              ></i>
              <h2>Meine Kunden</h2>
              {state &&
                state.work.map((item, index) => (
                  <SingleItem key={index} value={item} act="work" />
                ))}
            </div>

            <div className="myCrewArea">
              <i
                className="fa fa-plus"
                title="Crew Hinzufügen"
                onClick={() => doAction("crew")}
              ></i>

              <h2>Meine Crew</h2>
              {state.crew.map((item, index) => (
                <SingleItem key={index} value={item} act="crew" />
              ))}
            </div>

            <div className="myUserArea">
              <i
                className="fa fa-plus"
                title="User Hinzufügen"
                onClick={() => doAction("user")}
              ></i>

              <h2>Meine Users</h2>
              <div className="singleUser">
                <ul>
                  {users &&
                    users.map((item, index) => (
                      <li key={index} onClick={() => changeUser(item.key)}>
                        {item.userName} <h3>{item.position}</h3>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
