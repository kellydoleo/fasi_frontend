import React from "react"
import Layout from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/components/Layout.js"

const Show = (props) => {
const {talents} = props

    return(
        
        <Layout>
            <div className=""  >
            {talents.map((talent) => (
                <div className="show-div" >
            <img src = {`${talent.image_url}`}  />
            <h2>{talent.name}</h2>
            <p>{talent.description}</p>
            <button onClick={talent.work_url} >See my Work</button>
            </div> 
            ))}
            </div>
           
        </Layout>
            
    )
}
export default Show; 

