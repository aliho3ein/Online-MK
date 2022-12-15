import { useContext } from "react";
import omContext from "../context/omContext";
import { togglePopUp, addData, editData } from "./../request";

/* sweetAlert */
import Swal from "sweetalert2";

export default function PopUp() {
  let { state, despatch } = useContext(omContext);

  let placeHolder = [];
  switch (state.action) {
    case "work":
      placeHolder = ["Unternehmer Name", "Über die Unternehmer"];
      break;
    case "crew":
      placeHolder = [
        "Mitarbeiter:in FullName",
        "position - Email - Telefone Nr. - about mitarbeiter",
      ];
      break;
    default:
      break;
  }

  let setData = (dt) => {
    let act = state.action;
    let title = document.getElementById("title");
    let disc = document.getElementById("des");
    let image = document.getElementById("cmsImg");
    let newItem = {
      title: title.value,
      disc: disc.value,
      image: image.value,
      user: state.user,
      date: new Date().toDateString(),
    };
    if (dt === "edit") {
      editData(act, state.edit, newItem);
      newItem.key = state.edit;
      despatch({ type: `${act}Edit`, payload: { newItem, key: state.edit } });
    } else {
      addData(act, newItem);
      despatch({ type: `${act}Add`, payload: { newItem } });
    }
  };

  /* Edit Data -----------------------*/
  let changeData = () => {
    Swal.fire({
      title: "möchtest du die Änderungen speichern?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Speichern",
      denyButtonText: `Nicht Speichern`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setData("edit");
      } else if (result.isDenied) {
        Swal.fire("die Änderungen wurde nicht speichert", "", "info");
      }
    });
  };

  return (
    <div className="popUpArea disNone">
      <div className="forms">
        <i className="fa fa-xmark" onClick={togglePopUp}></i>
        <label htmlFor="title">Name</label>
        <input
          id="title"
          className="cmsInput title"
          type="text"
          placeholder={placeHolder[0]}
        />
        <label htmlFor="des">Description</label>
        <textarea
          id="des"
          name=""
          className="cmsInput description"
          cols="30"
          rows="10"
          placeholder={placeHolder[1]}
        ></textarea>
        <label htmlFor="cmsImg">Image Link</label>
        <input id="cmsImg" className="cmsInput img" type="text" />
        {!state.edit ? (
          <button
            className="cmsBtn"
            id="articlePost"
            onClick={() => setData("add")}
          >
            Hinzufügen
          </button>
        ) : (
          <button
            className="cmsBtn btnYellow"
            id="articleEdit"
            onClick={changeData}
          >
            Bearbeiten
          </button>
        )}
      </div>
    </div>
  );
}
