import { useState } from 'react'; //to use states
import './App.css';
import Counterr from './Counterr';
import Random from './Random';
function App() {
  // const [name,setName]=useState("Rahul") //declaring states
  // const[numbers,setNumbers]=useState(20)
  // const[email,setEmail]=useState("rahul@gmail.com")
  const [name,setName]=useState("Rohit")
  const [lastname,setlName]=useState("kumar")

  return (
    <div className="App">
      <h1>welcome!!!</h1>
        {/* LHS is any name given */}
     <Random item={name} lname={lastname}/>      
     {/* passing data to random comp --concept of props--established a one way communication*/}
      <Counterr/>
    
    </div>
  );
}

export default App;


//every function here returns a UI--what we give to app.js is automatically printed on UI
//old contents are removed
//logo removed import