import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.scss';
import {Signup} from "./Components/Auth/Signup";
import {Login} from "./Components/Auth/Login";
import {AllBoardsPage} from "./Components/AllBoardsPage/AllBoardsPage";
import {Contexts} from "./Contexts";
import {BoardPage} from "./Components/BoardPage/BoardPage";

const App = () => {
  return (
    <div className="App">
        <Contexts>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={AllBoardsPage}/>
                    <Route exact path={'/signup'} component={Signup}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/board'} component={BoardPage}/>
                </Switch>
            </BrowserRouter>
        </Contexts>
    </div>
  );
}

export default App;
