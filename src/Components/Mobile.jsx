import React,{useState,useEffect} from 'react'
import firebase from '../firebase'
import '../App.css';
import Signout from './Signout'


const Mobile = () => {
    const [number,setNumber] = useState('');
    const [user,setUser]= useState('');

    const clearInputs =() =>{
        setNumber('');
      }

    const handleClick = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
        //let number = "+918107180837";
        firebase
          .auth()
          .signInWithPhoneNumber("+91"+number, recaptcha)
          .then((e) => {
            let code = prompt("enter otp");
            if (code == null) {
              return;
            }
            e.confirm(code).then((res) => {
              document.querySelector('label').textContent=number + "Number Verfied";
            });
          })
          .catch(() => {
            console.log("error");
          });
      };
      const handleLogout =()=>{
        firebase.auth().signOut();
        localStorage.removeItem('user')
      };
      const authListener =()=>{
        firebase.auth().onAuthStateChanged((user) =>{
          if(user){
              clearInputs();
            setUser(user);
            localStorage.setItem('user',JSON.stringify(user))
          }
          else{
            setUser("");
          }
         
        });
      };
      useEffect(()=>{
          authListener();
      }, []);
      return (
        <div>
            {user ? (<Signout handleLogout={handleLogout}/>) : (
              // <section className="login">
              // <div className="loginContainer">
              <div>
              <label>Enter mobile Number</label><br/>
              <input type="text" required value={number} onChange={(e) => setNumber(e.target.value)}/>
              <div class="btnContainer">
              {<button onClick={handleClick}>Get OTP</button> }
              </div>      
              <div id="recaptcha-container"></div>
              <br/>
              <label></label>
            </div>
            // </section>
            )}
        </div>
        
            
      );
    }
    
    export default Mobile;