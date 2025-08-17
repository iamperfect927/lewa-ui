[1mdiff --cc src/app/page.tsx[m
[1mindex d693fb3,3b161a8..0000000[m
[1m--- a/src/app/page.tsx[m
[1m+++ b/src/app/page.tsx[m
[36m@@@ -1,14 -1,31 +1,28 @@@[m
[31m- import SchoolsTable from '@/components/schoolsTable'[m
[31m- import AppButton from '@/components/ui/AppButton';[m
[31m- import Logs from '@/components/ui/LogsCard';[m
[31m- import SchoolAreaDistributionChart from '@/components/ui/SchoolAreaDistributionChart';[m
[31m- import StatCard from '@/components/ui/StatsCard';[m
[31m- import StudentsPerSchoolChart from '@/components/ui/StudentsPerSchoolChart';[m
[31m- import UsageStatsChart from '@/components/usageStatsChart';[m
[31m- import { FileText, PlusCircle, School, ShieldUser, UserPlus, UserRound, Users, Users2, Wallet } from 'lucide-react';[m
[32m+ 'use client';[m
[32m+ [m
[31m -// import GeneralStats from "../../components/ui/StatsCard";[m
[32m +import React from 'react'[m
[32m++import { FileText, PlusCircle, School, ShieldUser, UserPlus, UserRound, Users, Users2, Wallet } from 'lucide-react';[m
[32m+ import Logs from "@/components/LogsCard";[m
[31m -import { PlusCircle, FileText, UserPlus } from "lucide-react";[m
[31m -// import AppButton from "@/components/AppButton";[m
[32m+ import SchoolsTable from "@/components/schoolsTable";[m
[31m -import {  School,ShieldUser, UserRound, Wallet, Users2, Users } from "lucide-react"[m
[32m+ import SchoolAreaDistributionChart from "@/components/SchoolAreaDistributionChart";[m
[32m+ import StudentsPerSchoolChart from "@/components/StudentsPerSchoolChart";[m
[32m+ import UsageStatsChart from "@/components/usageStatsChart";[m
[32m+ import { StatCard } from "@/components/StatsCard";[m
[32m+ import { Button } from "@/components/ui/button";[m
  [m
[31m- const page = () => {[m
[31m -[m
[32m+ export default function Dashboard() {[m
[31m -[m
[31m -      const handleRegisterSchool = () => {[m
[32m++  const handleRegisterSchool = () => {[m
[32m+     alert("Register New School clicked!");[m
[32m+   };[m
[32m+ [m
[31m -    const handleRegisterTeacher = () => {[m
[31m -    alert("Register New School clicked!");[m
[32m++  const handleRegisterTeacher = () => {[m
[32m++    alert("Register New Teacher clicked!");[m
[32m+   };[m
[32m+ [m
[31m -    const handleGenerateReport = () => {[m
[31m -    alert("Register New School clicked!");[m
[32m++  const handleGenerateReport = () => {[m
[32m++    alert("Generate Report clicked!");[m
[32m+   };[m
[32m++  [m
    return ([m
      <div className="my-4 ">[m
  [m
