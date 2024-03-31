import './App.css';

import{name} from "./data.js";

import {User} from "./components/user.js"

function App() {
  
  return <div>
    <h1>Users:</h1>
    <h2>Hello {name}</h2>
    <h3>have a good day</h3>
    <section className="container">
    <User name="sha" Job="developer" Location="hyd"/>
    <User Job="software developer" Location="vij" />
    <User name="taj" Location="ongole"/>
    <User name="Zakeer" job="UI developer" Location="ongole"/>
    <User name="Jabeen" job="UI design" Location="vijayawada"/>




    </section>
    </div>
} 



export default App;
