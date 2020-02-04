import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import './App.scss';

export default function App(){
  return <HashRouter className="App">
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/movie-detail" component={Detail}/>
  </HashRouter>
}
