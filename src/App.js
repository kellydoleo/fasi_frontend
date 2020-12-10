import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home.js"
import Display from "./components/Display.js"
import Show from "./components/Show.js"
import Form from "./components/Form.js"
import { useParams } from "react-router"
function App() {

  const {id} = useParams()
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

 const emptyTalent = {
  name: "",
  email: "",
  image_url: "",
  description: "",
  work_url: "",
  work_image_url: ""
 }

 //handleUpdate for when you want to update form
const handleUpdate = (talent) => {
  fetch("https://fasi-backend.herokuapp.com/talents" + "/"+ talent.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(talent)
  }).then(()=> getTalent())
}
 

 const [selectedTalent, setSelectedTalent] = React.useState(emptyTalent)

 const selectTalent = (talent) => {
   setSelectedTalent(talent)

}

const deleteTalent = (talent) => {
  fetch("https://fasi-backend.herokuapp.com/talents" + "/"+  talent.id, {
    method: "delete",
  }).then((response) => getTalent())
}

const showTalent = (talent) => {
  fetch("https://fasi-backend.herokuapp.com/talents" + talent._id, {

  }).then((response) => getTalent())
}


 

  return (
  
    <>
    <main>
      <Switch>
        <Route exact path= "/" render={(rp) => <Home {...rp} talents = {talents} /> } />

        <Route exact path="/display" render={(rp) => <Display {...rp} talents = {talents} id = {id} selectTalent= {selectTalent} deleteTalent={deleteTalent} /> }/>

        <Route exact path = {`/display/:${id}`} render={(rp) => <Show {...rp} talents = {talents} id = {id} deleteTalent={deleteTalent} />  } />
        <Route exact path="/edit" render={(rp) => <Form {...rp} talents ={talents} handleSubmit = {handleUpdate} />} />

      </Switch>
         
    </main> 
        </>
  );
}

export default App;
