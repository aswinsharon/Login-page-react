import React  from 'react';
import "./styles.css";
import Login from './Login';

var isLoggedIn = false;

// function renderConditonally(){
//   if(isLoggedIn){
//     return(<h1>Hello</h1>)
//   }else{
//     return(<Login />);
//   }
// }

function App() {
  return (
    <div className="container">
     {(isLoggedIn === true)?<h1>Hello</h1>:<Login />}
    </div>
  );
}

export default App;
