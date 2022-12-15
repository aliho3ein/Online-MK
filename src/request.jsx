import instance from "./api/omApi";
import Swal from "sweetalert2";

/* Add Crew & Work */
let addData = (act, item) => {
  instance.post(`/${act}.json`, item).then((res) => {
    togglePopUp();
    console.log();
    SavedItem(act);
  });
};

/* Add Crew & Work */
let editData = (act, key, item) => {
  instance.put(`/${act}/${key}.json`, item).then((res) => {
    togglePopUp();
    SavedItem(act);
  });
};

/* Delete Item */
let deleteData = (act, id) => {
  instance.delete(`/${act}/${id}.json`).then((res) => {
    DeletedItem(act);
  });
};

/* Get Item */
let getSingleItem = (act, key) => {
  togglePopUp();
  instance.get(`${act}/${key}.json`).then((res) => {
    document.getElementById("title").value = res.data.title;
    document.getElementById("des").value = res.data.disc;
    document.getElementById("cmsImg").value = res.data.image;
  });
};

/* PopUp open & Close */
let togglePopUp = () => {
  let area = document.querySelector(".popUpArea");
  document.getElementById("title").value = "";
  document.getElementById("des").value = "";
  document.getElementById("cmsImg").value = "";
  area.classList.toggle("disNone");
};

let GetWork = () => {
  let work = {};
  return work;
};

/* Alerts */
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function SavedItem(act) {
  Toast.fire({
    icon: "success",
    title: `${act} wurde gespeichert `,
  });
}

function DeletedItem(act) {
  Toast.fire({
    icon: "warning",
    title: `${act} wurde gelöscht `,
  });
}

export { addData, getSingleItem, editData, deleteData, GetWork, togglePopUp };
