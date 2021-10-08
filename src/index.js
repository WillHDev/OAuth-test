import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import New from "./components/New";
import  LoginPage from './pages/LoginPage';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>

<Switch>
<Route exact path="/">
            <App />
          </Route>
          <Route  exact path="/auth">
            <LoginPage />
          </Route>
          <Route exact path="/resources/new">
            <New />
          </Route>
    
     
         
        </Switch>
  
    </BrowserRouter>
    </React.StrictMode>
     ,
  
  document.getElementById('root')
);

//<Route  exact component={LoginPage}>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

