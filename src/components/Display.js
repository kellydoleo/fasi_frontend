import React from 'react';
import Layout from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/components/Layout.js"

const Display = (props) => {

    const {talents} = props

    const loaded = () => (
        <Layout>
        {talents.map((talent)=>(
          
            <div>
              <h1>{talent.name}</h1>
              <h2>{talent.email}</h2>
              <p>{talent.description}</p>
              <a href={``} ><img src = {`${talent.work_image_url}`}/></a>
              
            </div>
          
        ))}
        </Layout>
      );

    const loading = <h1>loading...</h1>

    return talents.length > 0 ? loaded(): loading; 

};

export default Display;