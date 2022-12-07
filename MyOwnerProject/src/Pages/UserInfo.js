import React, { useContext } from "react";
import { Container, NavLink } from "react-bootstrap";
import "../Styles/UserInfo.css";
import Button from "react-bootstrap/Button";
import { Context } from "../index";
const UserInfo = () => {
  const userName = "aaa";
  const university = "МГУ";
  const { user } = useContext(Context);
  return (
    <Container>
      <div className="info">
        <div className="name">{userName}</div>
        <div className="university">{university}</div>
        <NavLink className="settings" variant="outline-info">
          Настройки аккаунта
        </NavLink>
        <br />
        <Button
          variant="outline-danger"
          style={{ fontSize: 24 }}
          onClick={() => {
            return user.isAuth === false;
          }}
          className="exit"
        >
          Выйти
        </Button>
        <div className="back">Обратно</div>
      </div>
    </Container>
  );
};

export default UserInfo;
