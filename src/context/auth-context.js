import { createContext, useContext, useReducer, useState, useEffect } from "react";
import axios from "axios"
import { useToken } from "./index";
import { useNavigate, useLocation } from "react-router-dom";
import { authReducer } from "../reducer/auth-reducer"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const { setToken } = useToken();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/'

  const [state, dispatch] = useReducer(authReducer, {
    email: "",
    password: "",
    fname: "",
    lname: ""
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newAcc, setNewAcc] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorInLogin, setErrorInLogin] = useState({});

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 2000);
    }
  }, [showToast])

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: state.email,
        password: state.password,
      });

      if (response.status === 200) {

        localStorage.setItem("token", response.data.encodedToken);
        setToken(response.data.encodedToken);
        setIsLoggedIn(true);
        setShowToast(true);
        navigate(from, { replace: true })
      }

    } catch (error) {
      console.log(error);

      if (error.response.status === 404) {
        setErrorInLogin({
          status: true,
          message: "Email not found"
        })
        console.log("email not found")
      }
      if(error.response.status === 401) {
        setErrorInLogin({
          status: true,
          message: "Invalid Email/Password"
        })
        console.log("Invalid Cred")
      }
    }
  };

  const guestCred = (e) => {
    e.preventDefault();
  }

  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email: state.email,
        password: state.password,
        fname: state.fname,
        lname: state.lname
      });

      console.log(response)

      localStorage.setItem("token", response.data.encodedToken);
      setNewAcc(true);
      navigate("/login");
      setShowToast(true);
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthContext.Provider value={{ isLoggedIn, logInHandler, dispatch, state, guestCred, setIsLoggedIn, logOutHandler, signupHandler, newAcc, setNewAcc, showToast, setShowToast, errorInLogin }}>
    {children}
  </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }