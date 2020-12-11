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
    <div className="beige-back" >
      
      <img className="hero-image" src={hero_image} />
      <img className="hero-image-text" src={hero_image_text} />
      <img id="hero-text" src={hero_text} />
      <div id="orange-bar" ></div>
      <img id="ig-icon" src={ig_icon} />
      <img id="twitter-icon" src={twitter_icon} />
      <div id="green-bar" ></div>
      <img id="green-arrow" src={arrow_green_bar} />
    </div>

    <div id="orange-box" >
    <img id="our-services" src={our_services} />
    <img id="laptop" src={laptop_icon} />
    <Link to="/display" > 
    <div class="button web-button" >WEB, MOBILE, & SOFTWARE DEV</div>
    </Link>

    <img id="designer-icon" src= {designers_icon} />

    <Link to="/display" >
    <div class="button designer-button" >GRAPHIC DESIGN/ART DIRECTION</div>
    </Link>

    <img id="pencil-icon" src={pencil_icon} />
    <Link to= "/display" >
    <div class="button pencil-button" >WRITING</div>
    </Link>

    <img id="diversity-icon" src={diversity_icon} />
    <Link to= "/display" > 
    <div class="button diversity-button" >DIVERSITY, EQUITY & INCLUSION CONSULTATION</div>
    </Link>
    <img id="photography-icon" src={photography_icon} />
    <Link to="/display" >
    <div class="button photography-button" >PHOTOGRAPHY</div>
    </Link>
    <img id="social-icon" src={social_media_icon} />
    <Link to="/display" >
    <div class="button social-button" >SOCIAL MEDIA</div>
    </Link>
    </div>

    <div className="last-div" >
        <img src={hired_text} />
        <h2>Fill out the form <span class="green" ><Link to="/create"  ><u>here</u></Link></span> and we’ll add you to our database.</h2>
    </div>

    </Layout>
)

}


export default Home;