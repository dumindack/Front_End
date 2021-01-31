import React, { Component } from 'react'
import './CSS/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="container">
                    <div id="part1">
                        <div id="companyinfo"> <a id="sitelink" href="#">About Us</a>
                            <p id="title"></p>
                            <p id="detail"><i>We are planning to make a platform called "Cake World” for both cake sellers and buyers. Sellers can make their own profile on this platform and can manage profiles by adding images of their cakes, adding their special skills, and can market themselves.</i></p>
                        </div>
                        <div id="explore">
                            <p id="txt1">Explore</p> <a class="link" href="#">Home</a> <a class="link" href="#">About</a> <a class="link" href="#">Help</a> <a class="link" href="#">Careers</a>
                        </div>
                        <div id="contact">
                            <p id="txt2">Contact Us</p>
                            <p class="text">Email :</p>
                            <p class="text">Telephone No :</p>
                            <p class="text">Fax :</p>
                            <br></br>
                            <p class="text">CakeWorld Company, Hapugala,</p>
                            <p class="text">Galle</p>
                            <p class="text">Sri Lanka</p>
                        </div>
                        <div id="legal">
                            <p id="txt3">Legal</p> <a class="link1" href="#">Terms and Conditions</a> <a class="link1" href="/">Privacy Policy</a>
                        </div>
                        <div id="subscribe">
                            <p id="txt4">Hot Line </p>
                            <p id="txt7">011 000 0000 </p>
                            <a class="waves-effect waves-light btn"></a>
                            <p id="txt5">Connect With US</p> <i class="fab fa-facebook-square social fa-2x"></i> <i class="fab fa-linkedin social fa-2x"></i> <i class="fab fa-twitter-square social fa-2x"></i>
                        </div>
                    </div>
                    <div id="part2">
                        <p id="txt6"><i class="material-icons tiny"> copyrightcopyright 2020 cakeworld - All right reserved</i></p>
                    </div>
                </div>
            </footer>
            
            
        )
    }
}

export default Footer
