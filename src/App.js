import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
//? redux => to create a store
//? react-redux => to connect the store with any components

const App = () => {
  return (
      <div className="App" style={{display: 'flex',flexDirection: 'column'}}>
        <CakeContainer />
        
        <IceCreamContainer/>

      </div>      

  );
};

export default App;
