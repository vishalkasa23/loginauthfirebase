import React from 'react';
// import firebase from '../firebase'
import {Link} from 'react-router-dom'

// const user= firebase.auth().currentUser;
// var email;

// if(user!=null){
// email=user.email;
// firebase.auth().currentUser.getIdToken(true).then(function(idToken){

//     document.querySelector('label').textContent=idToken ;
 
//   }).catch(function(error){
 
//  });
// }

const Signout =({handleLogout})=> {
    return (
        <div>
        <div class="bg1"></div>
        <div class="bg1 bg2"></div>
        <div class="bg1 bg3"></div>
        <section className="hero">
        <nav>
            <Link to='/Sign'>
        <button onClick={handleLogout}>Logout</button>
        </Link>
        </nav>
        {/* <label>{email}</label>
        <div>{email}</div> */}
        </section>
        </div>
    )
}

export default Signout;