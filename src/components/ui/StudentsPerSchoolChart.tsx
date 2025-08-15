import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lycee', students: 90 },
  { name: 'Bloom High', students: 60 },
  { name: 'Pineapple', students: 35 },
  { name: 'Pioneer Academy', students: 80 },
  { name: 'Great Minds', students: 75 },
  { name: 'St. Theresa', students: 20 },
  { name: 'Almighty Int’l', students: 30 },
];

const StudentsPerSchoolChart = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full h-[350px]">
      <h2 className="text-gray-700 font-semibold mb-4">Students Per School</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentsPerSchoolChart;
