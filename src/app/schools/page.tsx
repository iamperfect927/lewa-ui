'use client';

import { PlusCircle, FileText, UserPlus } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SchoolsTable from "@/components/schoolsTable";
import StatCard from "../../components/ui/StatsCard";

import {  School,ShieldUser, UserRound, Wallet, Users2, Users } from "lucide-react"
import TopPerformersCard from "@/components/ui/TopPerformersCard";


export default function Schools() {

      const handleRegisterSchool = () => {
    alert("Register New School clicked!");
  };

    const handleRegisterTeacher = () => {
    alert("Register New School clicked!");
  };


  return (
    <div className="my-4 h-full">

      {/* Main content */}
      <main className=" my-6 bg-dashboarb-background mx-4">
        <h1 className="text-2xl font-bold mb-4">Schools</h1>
        
        {/* Stats Section */}
        <div className="flex space-x-4 mb-8">
          <div className="block space-y-5">

            <div className="max-w-2xl flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">Schools Statistics</h1>
                <div className="bg-white p-5 rounded-bl-2xl rounded-br-2xl space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <StatCard title="Total Schools" value="200" icon={<School size={28} />} />
                      <StatCard title="Registered Teachers" value="500" icon={<UserRound size={28} />} />
                      <StatCard title="Total Students" value="11,000" icon={<Users size={28} />} />
                    </div>
                    
                </div>
            </div>

             <div className="flex gap-4 mb-6">
                <div className=" flex-1 ...">
                    <AppButton 
                      label="Register New School"
                      icon={<PlusCircle />}
                      variant="primary"
                      onClick={handleRegisterSchool}
                      className="w-full"
                    />
                </div>
                <div className=" flex-1 ...">
                    <AppButton 
                        label="Register New Teacher"
                        icon={<UserPlus />}
                        variant="primary"
                        onClick={handleRegisterTeacher} 
                        className="w-full"               
                    />
                </div>
             </div>
          </div>

            <div className="w-81 flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">Top Performers</h1>
                <div className="bg-white p-5 rounded-bl-2xl rounded-br-2xl">
                    <TopPerformersCard />
                </div>
            </div>
        </div>

        
        <SchoolsTable />

      </main>
    </div>
  );
}
