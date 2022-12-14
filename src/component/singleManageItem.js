import { useContext } from "react";
import { deleteData, getSingleItem } from "../request";
import omContext from "../context/omContext";

export default function SingleItem(props) {
  const { image, title, disc, user, date, key } = props.value;

  const { despatch } = useContext(omContext);

  let editItem = () => {
    despatch({ type: "setAction", payload: { act: props.act, key } });
    getSingleItem(props.act, key);
  };

  return (
    <div className="singleWork">
      <div
        className="imgWork"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="infoWork">
        <span>{title}</span>
        <p>{disc}</p>
        <hr />
        <h2>
          erstellt von <span>{user}</span> am {date}
        </h2>
        <div className="controlWork">
          <button onClick={() => deleteData(props.act, key)}>Löschen</button>
          <button onClick={editItem}>Bearbeiten</button>
        </div>
      </div>
    </div>
  );
}
