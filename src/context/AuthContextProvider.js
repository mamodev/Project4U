import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const DEFAULT_STATE = {
  data: undefined,
  key: undefined,
  api: undefined,
  loading: true,
};

function createApiInstance(key) {
  const api = axios.create({
    baseURL: "https://project4u-backend.herokuapp.com/api/",
  });
  api.defaults.headers.common["X-Api-Key"] = "Jkkro3Nc.Tw4ZAsmNAAsBfFrbJVjxS1AA3VcMEvwD";
  api.defaults.headers.common["Authorization"] = "Token " + key;
  return api;
}

export default function AuthContextProvider(props) {
  const [userData, setUserData] = useState(DEFAULT_STATE);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const key = window.localStorage.getItem("key");
    if (key && key !== "undefined") keyLogin(key);
    else setUserData((old) => ({ ...old, loading: false }));
  }, []);

  function keyLogin(key, then = () => {}) {
    axios({
      method: "get",
      url: "user/info/",
      headers: { Authorization: "Token " + key },
    })
      .then((res) => {
        setUserData((old) => ({
          ...old,
          key: key,
          loading: false,
          data: res.data,
          api: createApiInstance(key),
        }));
        window.localStorage.setItem("key", key);
        then();
      })
      .catch((err) => {
        setUserData({ DEFAULT_STATE, loading: false });
        window.localStorage.setItem("key", undefined);
      });
  }

  async function register(email, password, first_name, last_name) {
    const data = {
      password1: password,
      password2: password,
      email,
      first_name,
      last_name,
    };

    axios({
      method: "post",
      data,
      url: "auth/registration/",
    })
      .then((res) => {
        keyLogin(res.data.key, () => navigate("/profile"));
      })
      .catch((error) => {
        throw Error(error);
      });
  }

  async function login(email, password) {
    axios({
      method: "POST",
      data: { email, password },
      url: "auth/login/",
    })
      .then((res) => keyLogin(res.data.key, () => navigate("/profile")))
      .catch((err) => {
        const data = err.response.data;
        const values = Object.values(data);
        const message = values.length > 0 ? values[0] : "Errore avvenuto durante il login";
        enqueueSnackbar(message, { variant: "error" });
      });
  }

  async function logout() {
    userData
      .api({ method: "post", url: "auth/logout/" })
      .then((res) => invalidateSession())
      .catch((error) => {
        invalidateSession(error);
      });
  }

  function invalidateSession(err = null) {
    if (err) console.error(err);
    setUserData(DEFAULT_STATE);
    window.localStorage.removeItem("key");
    window.localStorage.removeItem("project");
    navigate("");
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!userData.key,
        key: userData.key,
        api: userData.api,
        data: userData.data,
        register,
        login,
        logout,
        invalidateSession,
      }}
    >
      {!userData.loading && props.children}
    </AuthContext.Provider>
  );
}
