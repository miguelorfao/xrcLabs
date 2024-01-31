import axios from "axios";

import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function PrivateRoutes() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  console.log(axios.defaults.withCredentials);
  const [auth, setAuth] = useState(true);
  console.log(auth);
  useEffect(() => {
    axios.get("http://localhost:3001/AdminLogin").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);

  return auth ? <Outlet /> : <Navigate to="/AdminLogin" />;
}

export default PrivateRoutes;
