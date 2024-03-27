import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    <h1>Users</h1>

    <section className="container">
    <User name="sha" job="developer Location="hyd/>
    <User job="software support" Location="vij" />
    <User name="taj" Location="ongole"/>
    </section>
    </div>
}


function User(props){
  return <div className="user">
    <h3>{props.name}</h3>
    <p>Job:{props.Job}</p>
    <p>Location:{props.Location}</p>
  </div>
}
export default App;
