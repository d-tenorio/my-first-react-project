
// this file creates the entire application in JSX


// import anything we need for our file to run
import React from 'react'; // lets us use the React package
import logo from './logo.svg'; // import a logo (local file) - need to import all images
import './App.css'; // import a CSS stylesheet (local file)

// import the Logo component file here
import Logo from "./components/Logo" 
import MainLink from "./components/MainLink" 
import Paragraph from "./components/Paragraph" 

// probably just writing Javascript here?
// wrong. 

// JSX: close to Javascript, but it has HTML-like syntax inside it


// where the actual content is set
// can only return ONE parent element
function App() {
  // return a single wrapper div containing content inside it
  return (
    // className???
    <div className="App"> 
      <header className="App-header">
        <Logo /> 
        {/* make a component for the p tag called Paragraph and import it into your App.js file */}
        <Paragraph />
        {/* make a component for the a tag called MainLink and import it into your App.js file */}
        <MainLink 
          txt = "Learn react!"
          source = "https://reactjs.org"
        />
        <MainLink 
          txt = "...or maybe Vue instead"
          source = "https://vuejs.org/"
        />

        <Logo />
        
      </header>

    </div>
    
  );
} //function body ends here

export default App; // this says what to actually give out as OUTPUT
