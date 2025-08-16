"use client";

import React from "react";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from "@/components/ui/chart";

const data = [
  { name: "North West", value: 29 },
  { name: "Center", value: 17 },
  { name: "South West", value: 18 },
  { name: "Littoral", value: 27 },
  { name: "West", value: 30 },
  { name: "Far North", value: 13 },
  { name: "North", value: 12 },
];

const COLORS = [
  "#8884d8",
  "#FF6B6B",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "#A78BFA",
  "#34D399",
];

const SchoolAreaDistributionChart = () => {
  // Prepare chart config
  const chartConfig = Object.fromEntries(
    data.map((d, i) => [
      d.name,
      {
        label: d.name,
        color: COLORS[i % COLORS.length],
      },
    ])
  );

  // Calculate total value and cumulative angles
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;

  // Tooltip state
  const [hovered, setHovered] = React.useState<string | null>(null);

  const handleMouseEnter = (name: string) => setHovered(name);
  const handleMouseLeave = () => setHovered(null);

  return (
    <ChartContainer
      id="school-area"
      config={chartConfig}
      className="bg-white p-6 rounded-2xl shadow-md w-full h-[400px] flex flex-col items-center"
    >
      <h2 className="text-gray-700 font-semibold mb-4 text-lg">
        School Area Distribution
      </h2>

      

      <svg width={300} height={300} viewBox="0 0 300 300">
        <g transform="translate(150, 110)">
          {data.map((d, i) => {
            const startAngle = (cumulative / total) * 2 * Math.PI;
            const sliceAngle = (d.value / total) * 2 * Math.PI;
            cumulative += d.value;

            const x1 = Math.cos(startAngle) * 100;
            const y1 = Math.sin(startAngle) * 100;
            const x2 = Math.cos(startAngle + sliceAngle) * 100;
            const y2 = Math.sin(startAngle + sliceAngle) * 100;
            const largeArc = sliceAngle > Math.PI ? 1 : 0;

            const path = `
              M 0 0
              L ${x1} ${y1}
              A 100 100 0 ${largeArc} 1 ${x2} ${y2}
              Z
            `;

            return (
              <path
                key={d.name}
                d={path}
                fill={COLORS[i % COLORS.length]}
                stroke="#fff"
                strokeWidth={2}
                // onMouseEnter={() => handleMouseEnter(d.name)}
                // onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </g>
      </svg>

      {/* {hovered && <ChartTooltipContent active payload={[{ name: hovered, value: data.find(d => d.name === hovered)?.value }]} />} */}

      <ChartLegendContent payload={data.map((d, i) => ({ value: d.name, color: COLORS[i % COLORS.length] }))} />
    </ChartContainer>
  );
};

export default SchoolAreaDistributionChart;
