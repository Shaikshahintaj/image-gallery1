import './App.css';

function App() {
  return <div>
    <h1>Users</h1>
    <section className="container">
    <User name="sha" Job="developer" Location="hyd"/>
    <User Job="software developer" Location="vij" />
    <User name="taj" Location="ongole"/>
    <User name="Zakeer" job="UI developer" Location="ongole"/>
    <User name="Jabeen" job="UI design" Location="vijayawada"/>

    </section>
    </div>
}


function User(props){
  return <div className="user other-class">
    <h3>{props.name}</h3>
    <p>Job:{props.Job}</p>
    <p>Location:{props.Location}</p>
  </div>
}
export default App;
