'use client';

// import GeneralStats from "../../components/ui/StatsCard";
import Logs from "@/components/LogsCard";
import { PlusCircle, FileText, UserPlus } from "lucide-react";
// import AppButton from "@/components/AppButton";
import SchoolsTable from "@/components/schoolsTable";
import {  School,ShieldUser, UserRound, Wallet, Users2, Users } from "lucide-react"
import SchoolAreaDistributionChart from "@/components/SchoolAreaDistributionChart";
import StudentsPerSchoolChart from "@/components/StudentsPerSchoolChart";
import UsageStatsChart from "@/components/usageStatsChart";
import { StatCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";


export default function Dashboard() {

      const handleRegisterSchool = () => {
    alert("Register New School clicked!");
  };

    const handleRegisterTeacher = () => {
    alert("Register New School clicked!");
  };

    const handleGenerateReport = () => {
    alert("Register New School clicked!");
  };
  return (
    <div className="my-4 ">

      {/* Main content */}
      <main className=" my-6 bg-dashboarb-background mx-4 max-w-[95%]">
        <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
        
        {/* Stats Section */}
        <div className="flex space-x-4 mb-8">
            <div className="max-w-2xl flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">General Statistics</h1>
                <div className="bg-white p-5 rounded-bl-2xl rounded-br-2xl space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <StatCard title="Total Schools" value="200" icon={<School size={28} />} />
                      <StatCard title="School Admins" value="196" icon={<ShieldUser size={28} />} />
                      <StatCard title="Registered Teachers" value="500" icon={<UserRound size={28} />} />
                      <StatCard title="Processed Fees" value="$50,000" icon={<Wallet size={28} />} />
                      <StatCard title="Total Students" value="11,000" icon={<Users size={28} />} />
                      <StatCard title="Total Parents" value="3,459" icon={<Users2 size={28} />} />
                    </div>
                    
                </div>
            </div>
            <div className="w-81 flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">Logs</h1>
                <div className="bg-white p-5 rounded-bl-2xl rounded-br-2xl">
                    <Logs />
                </div>
            </div>
        </div>

        <div className="flex gap-4 mb-6">
            <div className=" flex-1 ...">
                <Button 
                  label="Register New School"
                  icon={<PlusCircle size={25}/>}
                  variant="default"
                  size="default"
                  onClick={handleRegisterSchool}
                  className="w-full"
                  customStyle={{ background: "var(--gradient-stat-card)" }} //  gradient style
                 />
            </div>
            <div className=" flex-1 ...">
                <Button 
                    label="Register New Teacher"
                    icon={<UserPlus size={25}/>}
                    variant="default"
                    size="default"
                    onClick={handleRegisterTeacher}
                    className="w-full"
                    customStyle={{ background: "var(--gradient-stat-card)" }} //  gradient style             
                />
            </div>
            <div className="flex-1 ...">
                <Button 
                    label="Generate Report"
                    icon={<FileText size={25}/>}
                    variant="default"
                    size="default"
                    onClick={handleGenerateReport}
                    className="w-full"
                    customStyle={{ background: "var(--gradient-stat-card)" }} //  gradient style              
                />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StudentsPerSchoolChart />
          <SchoolAreaDistributionChart />
        </div>
        <div className="my-5">
          <UsageStatsChart />
        </div>
        <div className="my-5">
          <SchoolsTable />
        </div>

        

      </main>
    </div>
  );
}
