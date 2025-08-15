"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartData = [
  { location: "Far North", "2020": 95, "2021": 45, "2022": 80 },
  { location: "North", "2020": 30, "2021": 80, "2022": 60 },
  { location: "Adamawa", "2020": 85, "2021": 20, "2022": 90 },
  { location: "North West", "2020": 100, "2021": 60, "2022": 95 },
  { location: "South West", "2020": 60, "2021": 70, "2022": 80 },
  { location: "Centre", "2020": 70, "2021": 85, "2022": 60 },
  { location: "East", "2020": 95, "2021": 90, "2022": 100 },
  { location: "South", "2020": 40, "2021": 60, "2022": 70 },
  { location: "West", "2020": 20, "2021": 50, "2022": 30 },
  { location: "Littoral", "2020": 60, "2021": 80, "2022": 50 }
]

const lineColors = {
  "2020": "#7F9CF5",
  "2021": "#F687B3",
  "2022": "#38B2AC"
}
const chartConfig = {
            "2020": { label: "2020", color: lineColors["2020"] },
            "2021": { label: "2021", color: lineColors["2021"] },
            "2022": { label: "2022", color: lineColors["2022"] }
}

const UsageStatsChart = () => {
  return (
    <div className="bg-white rounded-xl">
      <Card className={cn("border-0")}>
      <CardHeader>
        <CardTitle>Usage Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="location" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis domain={[0, 100]} />
              <Legend />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" hideLabel />}
              />
              <Line dataKey="2020" type="linear" stroke={lineColors["2020"]} strokeWidth={2} dot />
              <Line dataKey="2021" type="linear" stroke={lineColors["2021"]} strokeWidth={2} dot />
              <Line dataKey="2022" type="linear" stroke={lineColors["2022"]} strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
    </div>
  )
}

export default UsageStatsChart
