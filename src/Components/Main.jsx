import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Email from './Email'
import Mobile from './Mobile'
import Sign from './Sign'
import OptionSign from './OptionSign'
import Signout from './Signout'


const Main = ()=>(
    <body>
        <div>
        <Switch>
            <Route exact path="/" component={OptionSign}></Route>
            <Route path="/Sign" component={Sign}></Route>
            <Route path="/email" component={Email}></Route>
            <Route path="/mobile" component={Mobile}></Route>
            <Route path="/Signout" component={Signout}></Route>

            </Switch>
    </div>
    </body>
    
)

export default Main;