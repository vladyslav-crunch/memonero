import Decks from "../../components/decks/decks.component";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const x: string = useOutletContext();
  // console.log(x);
  return (
    <>
      <div className="">Welcome to Memonero</div>
    </>
  );
};

export default Dashboard;
