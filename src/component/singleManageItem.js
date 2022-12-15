import { useContext } from "react";
import { deleteData, getSingleItem } from "../request";
/* sweetAlert */
import Swal from "sweetalert2";
import omContext from "../context/omContext";

export default function SingleItem(props) {
  const { image, title, disc, user, date, key } = props.value;

  const { despatch } = useContext(omContext);

  let editItem = () => {
    despatch({ type: "setAction", payload: { act: props.act, key } });
    getSingleItem(props.act, key);
  };

  /* Ask for Delete */
  let deleteItem = () => {
    Swal.fire({
      title: "Bist du sicher?",
      text: "Sie können dies nicht rückgängig machen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#136213",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja , lösche",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(props.act, key);
        despatch({
          type: `${props.act}Delete`,
          payload: { key },
        });
      }
    });
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
          <button onClick={deleteItem}>Löschen</button>
          <button onClick={editItem}>Bearbeiten</button>
        </div>
      </div>
    </div>
  );
}
