// Author: Moisés Adame-Aguilar
// Date: February 17, 2023
// Description: Introdution to React for JavaScript

// -- Componentes can be functional or classes.
// Components have props (proerties) which are
// some kind of function argument.

// Functional component that greets the user.
function Greeting(props){
    return <p>Hello, {props.name}</p>
}

// Class component that prints a title and the greets.
let displayData = []
class FormalGreeting extends React.Component{
    render(){
        const main = (
            <div id="greeting">
                <h1>Welcome!</h1>
                <Greeting name="moy"/>
                <button onClick={date}>Write Biang!</button>
            </div>
        )
        return main
    }
}

function date(){
    var date = new Date()
    date = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())
    alert('Time now: ' + date)
}

function addZero(number){
    return number < 10 ? '0' + number : number
}

// -- Props are passed to components via HTML attributes.
function Image(props){
    if(props.selection === 'satellite'){
        return <img src="../images/issIcon.png" alt="International Space Station" width="30%"></img>
    }else if(props.selection === 'house'){
        return <img src="../images/house.webp" alt="House" width="30%"></img>
    }else if(props.selection === 'equation'){
        return <img src="../images/quadraticEquation.png" alt="Quadratic Equation" width="30%"></img>
    }else{
        return 
    }
}

// -- Events are the same as the HTML DOM events

// -- React renders everything inside the root, div.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FormalGreeting/>);