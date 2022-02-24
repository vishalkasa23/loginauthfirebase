import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
import Mobile from './Mobile'

const Sign = () => (
    <div>
        <div class="bg1"></div>
        <div class="bg1 bg2"></div>
        <div class="bg1 bg3"></div>
    <section className="login">
        <div className="loginContainer">
                  <div class="Email">
                  <Link to="/email"><button >Email</button></Link>
                  </div>
                  <div class="Mobile">
                  <Link to="/Sign"><button >Mobile</button></Link>
                  </div>
                  <Mobile/>  
                </div>
    </section>
    </div>

)

export default Sign;