import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  className?: string; // Allow custom styling (e.g., gradient override)
}

export function StatCard({ title, value, icon, className }: StatCardProps) {
  return (
    <Card
      className={`text-white p-1 rounded-xl  ${className}`} 
      style={{
        background: "var(--gradient-stat-card)"
      }}
    >
      
      <CardContent className="flex gap-3 justify-start px-2">
        <div className=" rounded-full content-center ">
         {icon}
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold">{value}</p>
          <h3 className="text-sm font-medium">{title}</h3>          
        </div>
      </CardContent>


    </Card>
  );
}

