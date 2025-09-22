import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext.jsx";
import toast from 'react-hot-toast';
import axios from 'axios';
import { config } from '../utilis/config.js';

export const useGoogleAuth = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const authService = config.get("VITE_AUTH_URL");
  const navigate = useNavigate();

  const googleResponse = async (authResult) => {
    try {
      let result;
      const businessName = ""
      if (authResult["code"]) {
        result = await axios.get(
          `${authService}/auth/google/callback?code=${authResult["code"]}&businessName=${businessName}`,
          {
            withCredentials: true
          }
        );
      }
      if (result.status == 200 || result.status == 201) {
        toast.success("LoggedIn Successfully");
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const handleGoogleError = (error) => {
    if (
      error.error === "popup_closed_by_user" ||
      error.error === "access_denied"
    ) {
      toast.error("Account selection canceled.");
    } else {
      console.log("Google Login Error:", error);
      toast.error("Google login failed.");
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: handleGoogleError,
    flow: "auth-code",
  });

  return { handleGoogleLogin };
};