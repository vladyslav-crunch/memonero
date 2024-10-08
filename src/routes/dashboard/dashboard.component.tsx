import Decks from "../../components/decks/decks.component";
import { useOutletContext } from "react-router-dom";
import { DashboardContainer } from "./dashboard.style";
import Report from "../../components/report/report.component";
const Dashboard = () => {
  const searchValue: string = useOutletContext();
  return (
    <DashboardContainer>
      <Report />
      <Decks searchValue={searchValue} />
    </DashboardContainer>
  );
};

export default Dashboard;
