import React from "react";
import { ReportContainer } from "./report.styles";
import ReportGraph from "../report-graph/report-graph.component";

const Report = () => {
  return (
    <ReportContainer>
      <h2>Weekly report</h2>
      <ReportGraph />
    </ReportContainer>
  );
};

export default Report;
