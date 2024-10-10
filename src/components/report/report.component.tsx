import React from "react";
import { ReportContainer } from "./report.styles";
import ReportCards from "../report-cards/report-cards.component";

const Report = () => {
  return (
    <ReportContainer>
      <h2>Weekly report</h2>
      <ReportCards />
    </ReportContainer>
  );
};

export default Report;
