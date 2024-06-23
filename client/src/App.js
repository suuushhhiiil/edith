import Messenger from "./components/Messenger";
import "./App.css";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId='606250337985-pqmpibf6q47sqgapusgc200snan47em5.apps.googleusercontent.com';
  
  return ( 
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger /> 
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
export default App;
