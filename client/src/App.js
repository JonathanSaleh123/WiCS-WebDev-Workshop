import React, { useEffect, useState } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

// App() is like our main()
function App() 
{
  // https://react.dev/reference/react/useState
  // [var, setVar] = useState(varInitialValue)
  const [backendData, setBackendData] = useState();

  // https://react.dev/reference/react/useEffect

  // this code magically puts the server's response into backendData
  fetch("/api").then(   // then has bunch of default params, 
    response => response.json() // response is an object, reassign its values to itself.json()
  ).then(
    data => { setBackendData(data) }  // data is set to return of setBackendData(data)?
  );

  const HTML =
    (
      <div>
        <NavBar></NavBar>
        <About></About>
        <Projects title={"Game"} description={"Somebody going to be a bitch"} image={"images/johny-goerend-t1j-1GdWNgo-unsplash.jpg"}></Projects>
        <Footer></Footer>
      </div>
    );

  return HTML;
}

// App() is like our main() because we export it as our default function
export default App;