import React from "react"
// import {require} from "browserify"
import fasi_logo_green from "../images/fasi_logo_green.png"
import orange_fasi_logo from "../images/orange_fasi_logo.png"
import footer_text from "../images/footer_text.png"

const Layout = (props) => {

return(
    <html>
        <head>
            
        </head>
        <body>
            <header>
            <img src={fasi_logo_green}  />
            </header>
            <main>{props.children}</main>
        </body>
        <footer id="green-background" >
        <img src={orange_fasi_logo} />
        <img src={footer_text} />
        <p>©2020 Kelly D'oleo</p>
        </footer>
    </html>
)
}

export default Layout; 