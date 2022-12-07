import React, { useContext, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../Http/UserAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {
  INSTITUTEMAP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../Router/Consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("jghj");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("ghjh");
  useEffect(() => {
    setEmail(email);
    console.log(email);
    setPassword(password);
    console.log(password);
  }, [email, password]);

  const useClick = async () => {
    try {
      let email ="dasdsd";
      let password = "asdasd"
      let data;
      console.log("сработало1");
      if (isLogin) {
        data = await login(email, password);
        console.log("сработало2");
      } else {
        data = await registration(email, password);
        console.log("сработало3");
      }
      user.setUser(data);
      console.log("сработало4");
      user.setIsAuth(true);
      console.log("сработало5");
      navigate(INSTITUTEMAP_ROUTE);
    } catch (e) {
      console.log(e.message);
      console.log("сработало6");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          {isLogin ? null : (
            <div>
              <Form.Control
                className="mt-3"
                placeholder="Введите ваш код..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />

              <Form.Control
                className="mt-3"
                placeholder="Введите ваше имя..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="text"
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button
              className="ml-auto"
              onClick={useClick}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
