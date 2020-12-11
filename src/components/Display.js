import React from 'react';
import Layout from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/components/Layout.js"
import {Link} from "react-router-dom"


const Display = (props) => {

    const {talents} = props

    const loaded = () => (
        <Layout>
          <div className = "show-wrapping-div" >
        {talents.map((talent)=>(
          
            <div className="display-div" >
             <Link to={`/display/${talent.id}`}  ><img id="work-image" src = {`${talent.work_image_url}`}/></Link> 
              
              <Link to={`/display/${talent.id}`}  ><h1>{talent.name}</h1></Link>
              <h2>{talent.email}</h2>
              <p>{talent.description}</p>
              <button className="edit-button" onClick={()=>{
                props.selectTalent(talent);
                props.history.push("/edit")
              }} >Edit</button>
              <button className="delete-button" onClick={()=> {
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