import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.scss';
import {Signup} from "./Components/Auth/Signup";
import {Login} from "./Components/Auth/Login";
import {Header} from "./Components/Header/Header";
import {BoardsPage} from "./Components/BoardsPage/BoardsPage";
import {Contexts} from "./Components/Contexts";

const App = () => {
  return (
    <div className="App">
        <Contexts>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={BoardsPage}/>
                    <Route exact path={'/signup'} component={Signup}/>
                    <Route exact path={'/login'} component={Login}/>
                </Switch>
            </BrowserRouter>
        </Contexts>
    </div>
  );
}

export default App;
