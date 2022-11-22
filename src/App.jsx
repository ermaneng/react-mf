import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./MyWidget";
import MyWidget from "./MyWidget";


const App = () => (
    
    <MyWidget />
)

ReactDOM.render(<App />, document.getElementById("app"));
