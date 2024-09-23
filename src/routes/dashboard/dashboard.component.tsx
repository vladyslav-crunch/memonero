import Decks from "../../components/decks/decks.component";
import { useOutletContext } from "react-router-dom";
import { DashboardContainer } from "./dashboard.style";
import Report from "../../components/report/report.component";
import { User } from "firebase/auth";
const Dashboard = () => {
  const [searchValue]: [string] = useOutletContext();
  return (
    <DashboardContainer>
      <Report />
      <Decks />
    </DashboardContainer>
  );
};

export default Dashboard;
