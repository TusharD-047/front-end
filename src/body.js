import React, { useState } from "react";
import './body.css';


function Body() {
	const [isLoading, setIsLoading] = useState(true);
	const logo = require('../src/placeholder1.png')

  function onLoad() {
    // delay for demo only

   	setIsLoading(!isLoading)
	console.log(isLoading)
  }


	const [file, setFile] = useState(logo);
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<h2>Add Image:</h2>
			{/* <img
        		alt="ad-img"
        		width={300}
        		src={logo}
        		// style={{ display: isLoading ? "block" : "none" }}
      		/> */}
			<img src={file}
			// style={{ display: isLoading ? "none" : "block" }}
			// onLoad={onLoad}
			/>
            <input type="file" onChange={handleChange} 
			/>
			<button onClick={onLoad} style={{display: isLoading? "block" : "none"}}>Upload Image</button>
			<div>
				<button style={{ display: isLoading ? "none" : "block" }}>Download</button>
				<button  style={{ display: isLoading ? "none" : "block" }}>Back</button>
			</div>
		</div>

	);
}

export default Body;
