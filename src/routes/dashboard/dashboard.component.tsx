import Decks from "../../components/decks/decks.component";
import { DashboardContainer } from "./dashboard.style";
import Report from "../../components/report/report.component";
const Dashboard = () => {
  return (
    <DashboardContainer>
      <Report />
      <Decks />
    </DashboardContainer>
  );
};

export default Dashboard;
