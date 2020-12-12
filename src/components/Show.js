import React from "react"
import Layout from "../Layout.js"
import { useParams } from "react-router"

const Show = (props) => {
const {talents} = props
const {id} = useParams()

const talent = talents.filter(talent => {
    if(talent.id == id) {
        return talent
    }
})
    return(
        
        <Layout>
            <div className=""  >
            
                <div className="show-div" >
            <img src = {talent[0].image_url}  />
            <h2>{talent[0].name}</h2>
            <p>{talent[0].description}</p>
            <button onClick={talent[0].work_url} >See my Work</button>
            </div> 
            
            </div>
           
        </Layout>
            
    )
}
export default Show; 

