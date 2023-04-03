import logo from './logo.svg';
import './App.css';

import { Stock } from './components/Stock';
const list = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  	return (
		<div className="order">
            <Stock list={list}/>
        </div>
	);
}

export default App;