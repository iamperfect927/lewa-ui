// import {  School,ShieldUser, UserRound, Wallet, Users2, Users } from "lucide-react"

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

// const GeneralStats = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

//     </div>
//   );
// };

export default StatCard;
