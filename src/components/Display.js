import React from 'react';
import Layout from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/Layout.js"
import {Link} from "react-router-dom"

// import CardColumns from 'react-bootstrap/CardColumns'


const Display = (props) => {

    const {talents} = props

    const loaded = () => (
        <Layout>

          <div className="spacer" ></div>
          <div className = "row" >
        {talents.map((talent)=>(
          
            <div className="column" style={{width: "2%"}} >
              
           <Link to={`/display/${talent.id}`} key={talent.id}  ><img  src = {`${talent.work_image_url}`}/></Link>
              
              <Link to={`/display/${talent.id}`} key={talent.id}  ><h1>{talent.name}</h1></Link>
              <h2>{talent.email}</h2>
              <p>{talent.description}</p>
              <button variant="primary"  onClick={()=>{
                props.selectTalent(talent);
                props.history.push("/edit")
              }} >Edit</button>
              <button variant="primary"  onClick={()=> {
                props.deleteTalent(talent)
              }} >Delete</button>
              
             
              
             </div>
          
        ))}
        </div>
        </Layout>
      );

    const loading = <h1>loading...</h1>

    return talents.length > 0 ? loaded(): loading; 

};

export default Display;