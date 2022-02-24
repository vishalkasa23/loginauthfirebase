import React,{useState,useEffect} from 'react'
import firebase from '../firebase';
import {Link} from 'react-router-dom'
import '../App.css';
import Signout from './Signout'

const Email = () => {
    const [user,setUser]= useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);


    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
      }
      const clearInputs =() =>{
        setEmail('');
        setPassword('');
      }
      const handleLogin =() =>{
          clearErrors();
          firebase
          .auth()
          .signInWithEmailAndPassword(email,password)
          .catch(err => {
            switch(err.code){
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
            }
          });
      };
      const handleSignup =() =>{
        clearErrors();
        firebase
          .auth()
          .createUserWithEmailAndPassword (email,password)
          .catch(err => {
            switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email": 
                setEmailError(err.message);
                break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
            }
          });
      };
      const handleLogout =()=>{
        firebase.auth().signOut();
        localStorage.removeItem('user');
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
              <div>
              <div class="bg1"></div>
              <div class="bg1 bg2"></div>
              <div class="bg1 bg3"></div>
              <section className="login">
              <div className="loginContainer">
              <div class="Email1">
                  <Link to="/email"><button >Email</button></Link>
                  </div>
              <div class="Mobile1">
                  <Link to="/Sign"><button >Mobile</button></Link>
              </div>
              <label id='username'>UserName</label>
              <input type="text" autofocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p className="errorMsg">{emailError}</p>
              <label>Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
              <p className="errorMsg">{passwordError}</p>
              <div className="btnContainer">
                        {hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't Have an Account ? <span onClick={ () => setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </>
                        ):(
                                <>
                                <button onClick={handleSignup}>Sign Up</button>
                                <p>Have an Account ? <span onClick={ () => setHasAccount(!hasAccount)}>Sign In</span>
                                </p>
                                </>
                        )}
    
                    </div>
            </div>
            </section>
            </div>
            )}
    
    
    
    
        </div>
        
            
      );
    }
    
    export default Email;