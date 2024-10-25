import React from "react";
import { ReportCardsContainer, ReportCard } from "./report-cards.styles";

const ReportCards = () => {
  return (
    <ReportCardsContainer>
      <ReportCard color={"EF6565"}>
        <span className="report-card-title">Low:</span>
        <span className="report-card-value">&nbsp;164</span>
      </ReportCard>
      <ReportCard color={"FFE24A"}>
        <span className="report-card-title">Mid:</span>
        <span className="report-card-value">&nbsp;255</span>
      </ReportCard>
      <ReportCard color={"CA37FF"}>
        <span className="report-card-title">High:</span>
        <span className="report-card-value">&nbsp;112</span>
      </ReportCard>
    </ReportCardsContainer>
  );
};

export default ReportCards;
