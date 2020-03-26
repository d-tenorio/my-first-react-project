import React from "react";


//building a MainLink component

// use Javascript inside curly braces {} within the JSX code
function MainLink(props) {
	return (
		<a
          className="App-link"
          href={props.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.txt}
        </a>
	)


}

export default MainLink;
