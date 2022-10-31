export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={`./${props.entry.image}`} alt={props.entry.place} />
      <div className="card--details">
        <div className="card--location">
          <span className="card--city">
          <i className="card--pin fa-solid fa-location-dot fa-fw"></i>
            {props.entry.location.city} •
          </span>
          <span className="card--country">
           {props.entry.location.country}
          </span>
          <span className="card--maps"><a className="link" href={props.entry.location.googleMaps}>View on Google Maps</a></span>
        </div>
        <h2 className="card--title">{props.entry.title}</h2>
        <p className="card--date">{props.entry.date}</p>
        <p className="card--description">{props.entry.description}</p>
      </div>
    </div>
  )
}