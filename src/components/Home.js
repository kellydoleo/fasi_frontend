import React from "react";
import { Link } from "react-router-dom";
import Layout from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/components/Layout.js"
// import {require} from "browserify"
import hero_image from "../images/hero_image.png"
import hero_image_text from "../images/hero_image_text.png"
import hero_text from "../images/hero_text.png"
import ig_icon from "../images/ig_icon.png" 
import twitter_icon from "../images/twitter_icon.png"
import arrow_green_bar from "../images/arrow_green_bar.png"
import laptop_icon from "../images/laptop_icon.png"
import our_services from "../images/our_services.png"
import designers_icon from "../images/designers_icon.png"
import pencil_icon from "../images/pencil_icon.png"
import diversity_icon from "../images/diversity_icon.png"
import photography_icon from "../images/photography_icon.png"
import social_media_icon from "../images/social_media_icon.png"
import hired_text from "../images/hired_text.png"

const Home = (props) => {

return(
    <Layout>
    <div>
      
      <img src={hero_image} />
      <img src={hero_image_text} />
      <img src={hero_text} />
      <div id="orange-bar" ></div>
      <img src={ig_icon} />
      <img src={twitter_icon} />
      <div id="green-bar" ></div>
      <img src={arrow_green_bar} />
    </div>

    <div>
    <img src={our_services} />
    <img src={laptop_icon} />
    <Link to="/display" > 
    <div class="button" >WEB, MOBILE, & SOFTWARE DEV</div>
    </Link>

    <img src= {designers_icon} />

    <Link to="/display" >
    <div class="button" >GRAPHIC DESIGN/ART DIRECTION</div>
    </Link>

    <img src={pencil_icon} />
    <Link to= "/display" >
    <div class="button" >WRITING</div>
    </Link>

    <img src={diversity_icon} />
    <Link to= "/display" > 
    <div class="button" >DIVERSITY, EQUITY & INCLUSION CONSULTATION</div>
    </Link>
    <img src={photography_icon} />
    <Link to="/display" >
    <div class="button" >PHOTOGRAPHY</div>
    </Link>
    <img src={social_media_icon} />
    <Link to="/display" >
    <div class="button" >SOCIAL MEDIA</div>
    </Link>
    </div>

    <div>
        <img src={hired_text} />
        <h2>Fill out the form <span class="green" ><Link to="/create"  ><u>here</u></Link></span> and we’ll add you to our database.</h2>
    </div>

    </Layout>
)

}


export default Home;