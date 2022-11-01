
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  ReferenceLine,
  YAxis
} from "recharts";

const data = [
  {
    percentage: "23%",
    Value: 23,
    total: 100,
    degree:"27°"
  },
  {
    percentage: "29%",
    Value: 29,
    total: 100,
    degree:"28°"
  },
  {
    percentage: "58%",
    Value: 58,
    total: 100,
    degree:"28°"
  },
  {
    percentage: "75%",
    Value: 75,
    total: 100,
    degree:"29°"
  },
  {
    percentage: "33%",
    Value: 33,
    total: 100,
    degree:"30°"
  },
  {
    percentage: "20%",
    Value: 20,
    total: 100,
    degree:"29°"
  },
  {
    percentage: "73%",
    Value: 73,
    total: 100,
    degree:"29°"
  },
  {
    percentage: "49%",
    Value: 49,
    total: 100,
    degree:"28°"
  }
];

export default function WeatherChart() {
  return (
    <AreaChart
      width={750}
      height={125}
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      {/* <XAxis xAxisId='top' dataKey="degree" orientation="top" /> */}
      <XAxis dataKey="percentage" />
      <YAxis tick={false} />
      {data.map(function (d, percentage) {
        return <ReferenceLine x={d.percentage} stroke="black" />;
      })}
      <Area
        type="monotone"
        dot={false}
        dataKey="Value"
        stroke="#5C9CE5"
        fill="#5C9CE5"
      />
    </AreaChart>
  );
}