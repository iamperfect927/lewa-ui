import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'North West', value: 29 },
  { name: 'Center', value: 17 },
  { name: 'South West', value: 18 },
  { name: 'Littoral', value: 27 },
  { name: 'West', value: 30 },
  { name: 'Far North', value: 13 },
  { name: 'North', value: 12 },
];

const COLORS = ['#8884d8', '#FF6B6B', '#00C49F', '#FFBB28', '#0088FE', '#A78BFA', '#34D399'];

const SchoolAreaDistributionChart = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full h-[350px]">
      <h2 className="text-gray-700 font-semibold mb-4">School Area Distribution</h2>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SchoolAreaDistributionChart;
