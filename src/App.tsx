import React from "react";
import logo from "./logo.svg";
import 'antd/dist/antd.css';
import "./App.css";

import Example1 from "./example1";
import Example2 from "./example2";
import Example3 from "./example3";

function App() {


  return (
    <div className="App">
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

export default App;
