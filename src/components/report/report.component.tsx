import React from "react";
import { ReportContainer } from "./report.styles";
import ReportCards from "../report-cards/report-cards.component";
import ReportGraph from "../report-graph/report-graph.component";

const Report = () => {
  return (
    <ReportContainer>
      <h2>Weekly report</h2>
      <ReportCards />
      <ReportGraph />
    </ReportContainer>
  );
};

export default Report;
