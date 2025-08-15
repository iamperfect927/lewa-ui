'use client';

import GeneralStats from "./components/GeneralStatistics";
import Logs from "./components/ui/Logs";
import { PlusCircle, FileText, UserPlus } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import SchoolsTable from "@/components/schoolsTable";


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
      <main className=" mt-6 bg-dashboarb-background mx-4">
        <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
        
        {/* Stats Section */}
        <div className="flex space-x-4 mb-8">
            <div className="max-w-2xl flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">General Statistics</h1>
                <div className="bg-white p-5 rounded-bl-2xl rounded-br-2xl">
                    <GeneralStats />
                </div>
            </div>
            <div className="w-81 flex-initial ...">
                <h1 className="text-2xl pl-5 py-2 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl">Logs</h1>
                <div className="bg-white p-5 rounded-bl-2xl rounded-br-2xl">
                    <Logs />
                </div>
            </div>
        </div>

        <div className="flex space-x-4 mb-6">
            <div className="w-32 flex-1 ...">
                <AppButton 
                  label="Register New School"
                  icon={<PlusCircle />}
                  variant="primary"
                  onClick={handleRegisterSchool}
                  className="rounded-lg"
                />
            </div>
            <div className="w-32 flex-1 ...">
                <AppButton 
                    label="Register New Teacher"
                    icon={<UserPlus />}
                    variant="secondary"
                    onClick={handleRegisterTeacher} 
                    className=""               
                />
            </div>
            <div className="w-32 flex-1 ...">
                <AppButton 
                    label="Generate Report"
                    icon={<FileText />}
                    variant="outline"
                    onClick={handleGenerateReport}   
                    className=""             
                />
            </div>
        </div>
        <SchoolsTable />

        {/* Buttons
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Register New School</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Register New Teacher</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Generate Report</button>
        </div> */}
      </main>
    </div>
  );
}
