import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function PrivateRoutes() {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3001/Admin").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  });

  return auth ? <Outlet /> : <Navigate to="/Admin" />;
}

export default PrivateRoutes;
