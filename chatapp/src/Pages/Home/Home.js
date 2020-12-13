import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import Images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
    render(){
        return(
            <div>
            <Header/>
            <div class="splash-container">
                <div class="splash">
                    <h1 class="splash-head">WEB CHAT APP</h1>
                    <p class="splash-subhead">
                        Let's talk with our loved ones
                    </p>

                    <div id="custom-button-wrapper">
                        <Link to='/login'>
                        <a class="my-super-cool-btn">
                            <div class="dots-container">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </div>
                            <span className="buttoncooltext">Get Started</span>
                        </a>
                        </Link>
                    </div>
                </div>
           </div>

                    <div class="content-wrapper">
                        <div class="content">
                            <h2 class="content-head is-center">Features of WebChat Application</h2>

                            <div className="Appfeatures">
                                <div className="contenthead">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-rocket"></i>
                                        Get Started Quickly
                                    </h3>
                                    <p>
                                        Just Register yourself with this app and start chatting with your loved ones
                                    </p>
                                </div>
                                <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-sign-in"></i>
                                        Firebase Authentication
                                    </h3>
                                    <p>
                                        Firebase Authentication has been implemented in this app
                                    </p>
                                </div>
                                <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-th-large"></i>
                                        Media
                                    </h3>
                                    <p>
                                        You can share images with your friends for better experience
                                    </p>
                                </div>
                                <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-refresh"></i>
                                        Updates
                                    </h3>
                                    <p>
                                        We will working with new feature for this app for better experience in future
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div class="AppfeaturesFounder">
                            <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                                <img width="300" alt="File Icons" class="pure-mg-responsive" src={Images.img}/>
                            </div>
                            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                                <h2 class="content-head content-head-ribbon">Mochammad Fatih Ulumuddin</h2>
                                <p style={{color:'white'}}>
                                    The Founder of Code Develop.
                                </p>
                                <p style={{color:'white'}}>
                                    Currently working at Code Develop and busy to explore new ideas with new technologies being developed
                                </p>
                            </div>
                        </div>

                        <div class="content">
                            <h2 class="content-head is-center">Who We Are?</h2>
                            <div class="Appfeatures">
                                <div class="l-box-lrg pure-u-1 pre-u-md-2-5">
                                    <form class="pure-form pure-form-stacked">
                                        <fieldset>
                                            <label for="name">Your Name</label>
                                            <input id="name" type="text" placeholder="Your Name"/>

                                            <label for="email">Your Email</label>
                                            <input id="email" type="email" placeholder="Your Email"/>

                                            <label for="password">Your Password</label>
                                            <input id="password" type="password" placeholder="Your Password"/>
                                        
                                        <button type="submit" class="pure-button">Sign Up</button>
                                        </fieldset>
                                    </form>
                                </div>

                                <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
                                    <h4>Contact Us</h4>
                                    <p>
                                        For any question or suggestion you can directly contact us on our Website Page:
                                        <a href="https://www.codedevelopcoffee.wordpress.com/"> https://codedevelopcoffee.wordpress.com</a>
                                    </p>
                                    <p>
                                        Whatsapp: <a>0895367370253</a>
                                    </p>
                                    <p>
                                        Gmail: <a>ulumuddinfatih421@gmail.com</a>
                                    </p>

                                    <h4>More Information</h4>
                                    <p>
                                        To whom it may concern
                                    </p>
                                    <p>
                                        This App is developed for learning purpose -
                                        Developed by -Mochammad Fatih Ulumuddin
                                    </p>
                                </div>
                            </div>

                        </div>
                        <Footer/>
                            </div>
                     </div>
        )
    }
}