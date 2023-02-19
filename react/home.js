// Author: Moisés Adame-Aguilar
// Date: February 18, 2023
// Description: Introdution to React for JavaScript.

import { Home } from "./homeMod";

// -- React renders everything inside the root, div.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Home/>);