import axios from "axios";
import { $authHost, $host } from "./index";

export const registration = async (email, password) => {
  const { data } = await $host.post("auth/registration", {
    email,
    password,
  });
  console.log(data);
  // localStorage.setItem("token", data.token);
  // return jwt_decode(data.token);
};

export const login = async (email, password) => {
  console.log(email);

  const { data } = await axios({
    method: "post",
    url: "http://localhost:4000/auth/login",
    data: { email, password },
  });
  console.log(data);
  // localStorage.setItem("token", data.token);
  // return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("auth/auth");
  console.log(data);
  // localStorage.setItem("token", data.token);
  // return jwt_decode(data.token);
};
