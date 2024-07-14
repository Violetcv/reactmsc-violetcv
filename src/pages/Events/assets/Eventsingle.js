function Eventsingle(props) {
  function openevent() {
    console.log(props.url);
    window.location.href = `/${props.url}`;
  }
  if (props.actualId === props.highlightid) {
    return (
      <div
        className="shadow-event-glow mt-8 max-900:mt-8 max-900:pb-4 max-900:pt-4"
        onClick={openevent}
      >
        <img
          className="w-32 inline-block max-900:w-24 max-900:inline-block max-900:-mt-8"
          src={props.image}
        />
        <div className="inline-block mr-12 w-52 max-900:inline-block max-900:mr-4 max-900:w-44">
          <h3 className="text-lg">{props.name}</h3>
          <h4 className="text-base">
            Date: {props.date} Venue: {props.venue}{" "}
          </h4>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="mt-8 shadow-lg max-900:mt-8 max-900:shadow-lg max-900:pb-4 max-900:pt-4"
        onClick={openevent}
      >
        <img
          className="w-32 inline-block max-900:w-24 max-900:inline-block max-900:-mt-8"
          src={props.image}
        />
        <div className="inline-block mr-12 w-52 max-900:inline-block max-900:mr-4 max-900:w-44">
          <h3 className="text-lg">{props.name}</h3>
          <h4 className="text-base">
            Date: {props.date} Venue: {props.venue}{" "}
          </h4>
        </div>
      </div>
    );
  }
}
export default Eventsingle;
