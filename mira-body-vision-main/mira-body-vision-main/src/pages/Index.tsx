
import React from 'react';
import AppLayout from '@/components/layouts/AppLayout';
import StatCard from '@/components/dashboard/StatCard';
import PatientList from '@/components/dashboard/PatientList';
import BodyScanVisualizer from '@/components/dashboard/BodyScanVisualizer';
import AIConsultant from '@/components/dashboard/AIConsultant';
import ScanMetricsChart from '@/components/dashboard/ScanMetricsChart';
import UploadDataCard from '@/components/dashboard/UploadDataCard';
import { Activity, FileText, Users, Clock } from 'lucide-react';
import { dashboardStats, recentPatients, scanIssues, vitalMetricsData } from '@/data/mockData';

const Index = () => {
  return (
    <AppLayout>
      <div className="grid gap-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-medical-green"></div>
            <span className="text-sm text-muted-foreground">System Online</span>
          </div>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title={dashboardStats[0].title}
            value={dashboardStats[0].value}
            description={dashboardStats[0].description}
            icon={<Activity />}
            trend={dashboardStats[0].trend}
          />
          <StatCard 
            title={dashboardStats[1].title}
            value={dashboardStats[1].value}
            description={dashboardStats[1].description}
            icon={<Users />}
            trend={dashboardStats[1].trend}
          />
          <StatCard 
            title={dashboardStats[2].title}
            value={dashboardStats[2].value}
            description={dashboardStats[2].description}
            icon={<FileText />}
            trend={dashboardStats[2].trend}
          />
          <StatCard 
            title={dashboardStats[3].title}
            value={dashboardStats[3].value}
            description={dashboardStats[3].description}
            icon={<Clock />}
            trend={dashboardStats[3].trend}
          />
        </div>
        
        {/* Middle row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BodyScanVisualizer issues={scanIssues} />
          </div>
          <div className="lg:col-span-1 flex flex-col">
            <AIConsultant className="flex-1" />
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UploadDataCard />
          </div>
          <div className="lg:col-span-2">
            <ScanMetricsChart data={vitalMetricsData} />
          </div>
        </div>
        
        {/* Patient list */}
        <PatientList patients={recentPatients} />
      </div>
    </AppLayout>
  );
};

export default Index;
