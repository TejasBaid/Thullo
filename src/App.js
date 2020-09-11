import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.scss';
import {Signup} from "./Components/Auth/Signup";
import {Login} from "./Components/Auth/Login";
import {Header} from "./Components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/signup'} component={Signup}/>
                <Route exact path={'/login'} component={Login}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

const Home = () => {
    return(

        <div className={'homepage'}>
            <Header />
        </div>
    )
}

export default App;
