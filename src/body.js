import React, { useState } from "react";
import './body.css';

function Body() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<h2>Add Image:</h2>
			
			<img src={file} />
            <input type="file" onChange={handleChange} />
		</div>

	);
}

export default Body;
