import { useState, useEffect } from 'react';
import './body.css';
import axios from 'axios';

function Body() {
	const logo = require('../src/placeholder1.png')
	const [response, setResponse] = useState(null);
	const [file, setFile] = useState(logo);
	const [uploadFile, setUploadFile] = useState(null)
	const [isLoading, setIsLoading] = useState(true);


  function onLoad() {
	var formData = new FormData();
	formData.append("image", uploadFile);
	axios.post("https://32c0-2401-4900-5d2d-37b9-bce-350f-9bbd-f2cd.ngrok-fr", formData, {
		headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'multipart/form-data'
		}
	}).then((response) => {
		console.log(response)
		setResponse(response.content)
		setIsLoading(!isLoading)
	})
  }

	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
		setUploadFile(e.target.files[0])
	}
	return (
		<div className="App">
			<h2>Add Image:</h2>
			<img
        		alt="ad-img"
        		width={300}
        		src={file}
        		style={{ display: isLoading ? "none" : "block" }}
      		/>
			<img src={file}
				style={{ display: isLoading ? "block" : "none" }}
			/>
            <input type="file" onChange={handleChange} style={{display: isLoading? "block" : "none"}}/>
			<button onClick={onLoad} style={{display: isLoading? "block" : "none"}}>Upload Image</button>
			<div class="left_right">
				<button style={{ display: isLoading ? "none" : "block" }}>Download</button>
				<button onClick={onLoad} style={{ display: isLoading ? "none" : "block" }}>Back</button>
			</div>
		</div>

	);
}

export default Body;
