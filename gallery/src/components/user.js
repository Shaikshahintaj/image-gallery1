export function User(props){
    return <div className="user other-class">
      <h3>{props.name}</h3>
      <p>Job:{props.Job}</p>
      <p>Location:{props.Location}</p>
    </div>
  }