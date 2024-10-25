import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ReportGraphContainer } from "./report-graph.styles";
import ReportCards from "../report-cards/report-cards.component";

const data = [
  {
    date: "12.10.24",
    Low: 10,
    Mid: 2,
    High: 1,
  },
  {
    date: "13.10.24",
    Low: 8,
    Mid: 4,
    High: 2,
  },
  {
    date: "14.10.24",
    Low: 7,
    Mid: 6,
    High: 4,
  },
  {
    date: "15.10.24",
    Low: 7,
    Mid: 5,
    High: 5,
  },
  {
    date: "16.10.24",
    Low: 8,
    Mid: 6,
    High: 5,
  },
  {
    date: "17.10.24",
    Low: 12,
    Mid: 7,
    High: 6,
  },
  {
    date: "18.10.24",
    Low: 12,
    Mid: 10,
    High: 7,
  },
];

const ReportGraph = () => {
  return (
    <ReportGraphContainer>
      <ResponsiveContainer width="100%" height="100%" style={{ left: "-20px" }}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -25,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          {/*<Legend />*/}
          <Line type="monotone" dataKey="Low" stroke="#EF6565" />
          <Line type="monotone" dataKey="Mid" stroke="#FFE24A" />
          <Line type="monotone" dataKey="High" stroke="#CA37FF" />
        </LineChart>
      </ResponsiveContainer>
      <ReportCards />
    </ReportGraphContainer>
  );
};

export default ReportGraph;
