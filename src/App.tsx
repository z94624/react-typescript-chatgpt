import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ChatGPT from "./ChatGPT";

const App: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + TypeScript + ChatGPT</h1>

      <ChatGPT />
    </>
  );
};

export default App;
