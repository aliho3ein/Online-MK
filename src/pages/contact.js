import { useEffect } from "react";
/* Function */
import { selectForm } from "./../actions";
/* Component */
import Header from "../component/header";
import Address from "./address";

/* Send Mail */

export default function Contact() {
  useEffect(() => {
    selectForm();
  }, []);

  return (
    <>
      <Header title={["Kontakt", "uns"]} />
      <Address />
      <div className="contactArea">
        <div className="formItems" data-id="1">
          <span>Full Name</span>
          <input type="text" className="in-1 contactInput"></input>
        </div>

        <div className="formItems" data-id="2">
          <span>Email Address</span>
          <input type="text" className="in-2 contactInput"></input>
        </div>

        <div className="formItems" data-id="3">
          <span>In welcher Branche bist du tätig?</span>
          <input type="text" className="in-3 contactInput"></input>
        </div>

        <div className="formItems" data-id="4">
          <span>Wie bist du auf uns aufmerksam geworden?</span>
          <input type="text" className="in-4 contactInput"></input>
        </div>

        <div id="formMassage" className="formItems" data-id="5">
          <span>Dein Nachricht</span>
          <textarea className="in-5"></textarea>
        </div>

        <button>Submit</button>
      </div>
    </>
  );
}
