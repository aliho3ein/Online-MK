import { useContext } from "react";
import omContext from "./../context/omContext";

/* Component */
import SingleCrew from "./singleCrew";

let Content = () => {
  const { state } = useContext(omContext);

  let crewList = state.crew.map((item, index) => {
    return <SingleCrew key={index} detail={item} num={index} />;
  });

  return (
    <main>
      <div id="crewContainer">{crewList}</div>
    </main>
  );
};

export default Content;
