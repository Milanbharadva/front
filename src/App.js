import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const setCookie = async () => {
    try {
      const response = await axios.get(
        "https://backend-flame-psi.vercel.app/setCookie",
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("fetched", true);
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("fetched")) {
      setCookie();
    }
  }, []);

  const makeApiCallWithCookie = async () => {
    try {
      const response = await axios.get(
        "https://backend-flame-psi.vercel.app/getCookie",
        {
          withCredentials: true,
        }
      );
      console.log("Response from server with cookie:", response.data);
      alert(response.data.cookies.token);
    } catch (error) {
      console.error("Error making API call with cookie:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={makeApiCallWithCookie}>Make API Call with Cookie</button>
    </div>
  );
}

export default App;
