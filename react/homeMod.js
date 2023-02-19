// Author: Moisés Adame-Aguilar
// Date: February 18, 2023
// Description: Introdution to React for JavaScript.

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

 function Home(){
    var main = (
      <div>
        <h1>Title</h1>
        <hr></hr>
        <MyForm/>
      </div>
      

    )

    return main
}

function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
}

// -- React renders everything inside the root, div.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Home/>);