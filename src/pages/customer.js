import { useContext } from "react";
import omContext from "./../context/omContext";
/* Component */
import Header from "./../component/header";
import CustomerItem from "../component/singleCustomer";

export default function Customer() {
  const { state } = useContext(omContext);

  let customerList = state.work.map((item, index) => (
    <CustomerItem key={index} detail={item} />
  ));

  return (
    <>
      <Header title={["Unsere", "Kunden"]} />
      <div className="customerArea">{customerList}</div>
    </>
  );
}
