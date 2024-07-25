import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // Function to make an API call to set the cookie
  const setCookie = async () => {
    try {
      // Make a GET request to the backend to set the cookie
      const response = await axios.get("http://localhost:3003/", {
        withCredentials: true,
      });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  useEffect(() => {
    setCookie();
  }, []);

  // Function to make an API call with the cookie
  const makeApiCallWithCookie = async () => {
    try {
      // Make a GET request with credentials
      const response = await axios.get("http://localhost:3003/endpoint", {
        withCredentials: true,
      });
      console.log("Response from server with cookie:", response.data);
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
