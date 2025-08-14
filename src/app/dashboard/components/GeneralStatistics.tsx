import {  School,ShieldUser, UserRound, Wallet, Users2, Users } from "lucide-react"

interface StatCardProps {
  title: string;
  value: string;
  icon: JSX.Element; // Accept a React element instead of img
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="flex text-white space-x-2 space-y-1 p-2 bg-stat-card-background accent-stat-card-background-accent rounded-xl min-w-45 max-w-70 min-h-14 max-h-25">
      <div className="size-11 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-l font-bold ">{value}</p>
        <h3 className=" text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
};

const GeneralStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard title="Total Schools" value="200" icon={<School size={28} />} />
      <StatCard title="School Admins" value="196" icon={<ShieldUser size={28} />} />
      <StatCard title="Registered Teachers" value="500" icon={<UserRound size={28} />} />
      <StatCard title="Processed Fees" value="$50,000" icon={<Wallet size={28} />} />
      <StatCard title="Total Students" value="11,000" icon={<Users size={28} />} />
      <StatCard title="Total Parents" value="3,459" icon={<Users2 size={28} />} />
    </div>
  );
};

export default GeneralStats;
