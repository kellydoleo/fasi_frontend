import React from "react"
// import {require} from "browserify"
import fasi_logo_green from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/images/fasi_logo_green.png"
import orange_fasi_logo from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/images/orange_fasi_logo.png"
import footer_text from "/Volumes/Seagate Portable Drive/GA_Work/projects/unit_4/FASI APP/fasi_frontend/src/images/footer_text.png"
import {Link} from "react-router-dom"



const Layout = (props) => {

return(
    <html>
        <head>
  
        </head>
        <body>
            <header>
            <Link to="/" >
            <img className="green-logo" src={fasi_logo_green}  />
            </Link>
            </header>
            <main>{props.children}</main>
        </body>
        <footer id="green-background" >
        <img id="orange-fasi-logo" src={orange_fasi_logo} />
        <img id="footer-text" src={footer_text} />
        <p>©2020 Kelly D'oleo</p>
        </footer>
    </html>
)
}

export default Layout; 