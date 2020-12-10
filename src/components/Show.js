import React from "react"
import Layout from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/components/Layout.js"

const Show = (props) => {
const {talents} = props

    return(
        
        <Layout>
            {talents.map((talent) => (
                <>
            <img src = {`${talent.image_url}`}  />
            <h2>{talent.name}</h2>
            </> 
            ))}
           
        </Layout>
            
    )
}
export default Show; 

