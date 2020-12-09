import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home.js"
import Display from "./components/Display.js"

function App() {

  const [talents, setTalent] = React.useState([])



  const getTalent = async () => {
    const response = await fetch("https://fasi-backend.herokuapp.com/talents")
    const data = await response.json()
    console.log(data)
    setTalent(data)
  }

  
   React.useEffect(()=>{

    getTalent()
 }, [] )

 

  return (
  
    <>
    <main>
      <Switch>
        <Route exact path= "/" render={(rp) => <Home {...rp} talents = {talents} /> } />

        <Route exact path="/display" render={(rp) => <Display {...rp} talents = {talents} /> }/>

      </Switch>
         
    </main> 
        </>
  );
}

export default App;
