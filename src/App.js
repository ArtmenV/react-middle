import React from "react";
import Counter from "./components/postItems";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";
import {Route} from 'react-router-dom'
import Contact from "./components/header/link/contact";


function App() {
  return (
    <>
      <Route component={Header}/>
      <Route path="/counter" component={Counter}/>
      <Route component={Body}/>
      <Route component={Footer}/>
      <Route path="/contact" component={Contact}/>
      </>
      );
}

export default App;
