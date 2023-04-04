import './dist/index.css';
import { useState } from 'react';
import { Client } from './websocketClient/Client'
import { LogIn } from './components/LogIn';



function handleButton(){
	let client = new Client('ws://192.168.1.216:8080')
	var inputMessage = document.getElementById('input-text').value
	client.send(inputMessage)

	document.getElementById('input-text').value = ''
}

function App() {
	// Use state that checks if the user is or not logged in.
	const [logedIn, setLogIn] = useState(false)

	// Function that handles the log in

	if(logedIn){
		return (
			<div className="App">
				<h1>
					Logged In
				</h1>
				
			</div>
		);
	}else{
		return <LogIn handleClick={() => {setLogIn(!logedIn)}}/>
	}
}

export default App;