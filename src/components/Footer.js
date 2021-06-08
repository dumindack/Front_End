import React, { Component } from 'react'
import './CSS/Footer.css'
import '../components/Pages/Privacy'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="container">
                    <br/><br/><br/>
                    <div id="part1">
                        <div id="companyinfo"> <a id="sitelink">About Us</a>
                            <p id="title"></p>
                            <p id="detail"><i>We are planning to make a platform called "Cake World” for both cake sellers and buyers. Sellers can make their own profile on this platform and can manage profiles by adding images of their cakes, adding their special skills, and can market themselves.</i></p>
                        </div>
                        <div id="explore">
                            <br/><br/>
                            <a class="link" href="/">Home</a>
                            <a class="link" href="/About">About</a>
                            <a class="link" href="/Privacy">Privacy Policy</a>

                        </div>
                        <div id="contact">
                            <p id="txt2">Contact Us</p>
                            <br/>
                            <p class="text">Email : cakeworld@mail.com</p>
                            <br></br>
                            <p class="text">CakeWorld Company, Hapugala,Galle,</p>
                            <br/>
                            <p class="text">Sri Lanka</p>
                        </div>
                        <div id="legal">
                            <br/><br/>
                           
                        </div>
                        <div id="subscribe">
                            <p id="txt4">Hot Line </p>
                            <p id="txt7">011 000 0000 </p>
                            
                        </div>
                    </div>
                  
                </div>
            </footer>
            
            
        )
    }
}

export default Footer
