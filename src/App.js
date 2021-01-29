
import './App.css';
import './Hello';
import Hello from './Hello';

function App(props) {
  return <div>
    Hello From ZAKI {props.name} Age = {props.age}
    <br/>
    <Hello name = {props.name}> </Hello>
        </div>
  
}


/*
function App({name,age}) {
  return <div>
    Hello From ZAKI {name} Age = {age}
    <br/>
    <Hello name = {name}></Hello>
    </div>
}

/*

+
let user = {name: "Arslan", age: 45}
So,
let {name, age} = user
is Equal to
let name = user.name;
let age = user.age;

This is Destructuring

*/

export default App;
