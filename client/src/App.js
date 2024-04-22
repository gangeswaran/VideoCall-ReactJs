import React from "react";
import Video from "./components/Video/Video";
import FormCard from "./components/FormCard/FormCard";
import NavBar from "./components/Navbar/Navbar";
import IncomingCall from "./components/IncomingCall/IncomingCall";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="main-app">
        <Video />
        <FormCard />
      </div>
      <IncomingCall />
    </>
  );
};

export default App;
