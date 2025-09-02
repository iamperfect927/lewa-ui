'use client';

import { PlusCircle, FileText, UserPlus } from "lucide-react";
import SchoolsTable from "@/components/schoolsTable";
import { StatCard } from "../../components/StatsCard";

import {  School,ShieldUser, UserRound, Wallet, Users2, Users } from "lucide-react"
import TopPerformersCard from "@/components/TopPerformersCard";
import { Button } from "@/components/ui/button";


export default function Schools() {

      const handleRegisterSchool = () => {
    alert("Register New School clicked!");
  };

    const handleRegisterTeacher = () => {
    alert("Register New Teacher clicked!");
  };


  return (
    <div className="my-4">

      {/* Main content */}
      <main className=" my-6 bg-dashboarb-background mx-4">
        <h1 className="text-2xl font-bold mb-4">Schools</h1>
        
        {/* Stats Section */}
        <div className="flex space-x-4 mb-8">
          <div className="block space-y-5">

            <div className="max-w-2xl flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">Schools Statistics</h1>
                <div className="bg-white p-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <StatCard title="Total Schools" value="200" icon={<School size={28} />} />
                      <StatCard title="Registered Teachers" value="500" icon={<UserRound size={28} />} />
                      <StatCard title="Total Students" value="11,000" icon={<Users size={28} />} />
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
