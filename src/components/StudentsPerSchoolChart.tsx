import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Lycee', students: 90 },
  { name: 'Bloom High', students: 60 },
  { name: 'Pineapple', students: 35 },
  { name: 'Pioneer Academy', students: 80 },
  { name: 'Great Minds', students: 75 },
  { name: 'St. Theresa', students: 20 },
  { name: 'Almighty Int’l', students: 30 },
];

const config = {
  students: {
    label: 'Students',
    color: '#3b82f6', // Color for the bar
  },
};

const StudentsPerSchoolChart = () => {

  return (
    <ChartContainer config={config} className="bg-white p-4 rounded-xl shadow-md w-full h-[400px]">
      <h2 className="text-gray-700 font-semibold mb-4">Students Per School</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-30}  // Set the rotation angle
            textAnchor="end" // Position the text
            height={90}  // Adjust height if needed
            color="bg-primary-header-background"
          />
          <YAxis 
            domain={[0, 'dataMax + 10']} // Set domain to start from 0 to max value + 10
          />
          {/* <Tooltip content={<ChartTooltipContent />} /> */}

          <Bar 
              dataKey="students"
              background="#E0EBFF" 
              fill="#3b82f6" 
              // radius={[6, 6, 0, 0]}  // border radius
            />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StudentsPerSchoolChart;