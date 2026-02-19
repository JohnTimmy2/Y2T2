export default function Place(props) {
  return (
    <li key={props.place.id} className="place-item">
      <button>
        <img src={props.place.image.src} alt={props.place.image.alt} />
        <h3>{props.place.title}</h3>
      </button>
    </li>
  );
}