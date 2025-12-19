import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Chai aur react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
  // next ->
  // create componnt and import here to see how we get access from provider.
}

export default App;
