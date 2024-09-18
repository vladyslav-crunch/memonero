import Decks from "../../components/decks/decks.component";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const x: string = useOutletContext();
  // console.log(x);
  return (
    <>
      <h1>{x}</h1>
      <Decks />
    </>
  );
};

export default Dashboard;
