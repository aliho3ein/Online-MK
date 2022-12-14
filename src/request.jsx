import instance from "./api/omApi";

/* Add Crew & Work */
let addData = (act, item) => {
  instance.post(`/${act}.json`, item).then((res) => {
    togglePopUp();
    console.log(`${act} wurde erfolgreich gespeichert `);
  });
};

/* Add Crew & Work */
let editData = (act, key, item) => {
  instance.put(`/${act}/${key}.json`, item).then((res) => {
    togglePopUp();
    console.log(`${act} wurde erfolgreich Bearbeitet `);
  });
};

/* Delete Item */
let deleteData = (act, id) => {
  instance.delete(`/${act}/${id}.json`).then((res) => {
    console.log(`${act} wurde erfolgreich gelöscht `);
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

export { addData, getSingleItem, editData, deleteData, GetWork, togglePopUp };
