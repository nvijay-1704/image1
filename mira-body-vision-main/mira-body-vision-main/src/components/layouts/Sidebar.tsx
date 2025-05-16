
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sidebar as SidebarComponent, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger 
} from '@/components/ui/sidebar';
import { 
  Activity, 
  Database, 
  FileText, 
  History, 
  LayoutDashboard, 
  Settings, 
  Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  return (
    <SidebarComponent>
      <SidebarHeader className="py-6">
        <div className="flex items-center px-4">
          <div className="relative h-8 w-8 mr-2">
            <div className="absolute inset-0 bg-medical-blue rounded-full opacity-20 animate-pulse-subtle"></div>
            <div className="absolute inset-1 bg-medical-blue rounded-full"></div>
          </div>
          <span className="font-bold text-lg text-white">Bio_Twin_X</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <MenuItem href="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
              <MenuItem href="/patients" icon={<Users size={20} />} label="Patients" />
              <MenuItem href="/diagnostics" icon={<Activity size={20} />} label="Diagnostics" />
              <MenuItem href="/reports" icon={<FileText size={20} />} label="Reports" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <MenuItem href="/history" icon={<History size={20} />} label="Scan History" />
              <MenuItem href="/database" icon={<Database size={20} />} label="Database" />
              <MenuItem href="/settings" icon={<Settings size={20} />} label="Settings" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-4 py-3 text-xs text-sidebar-foreground/60">
          <p>NAIN Initiative</p>
          <p>Bio_Twin_X v1.0.0</p>
        </div>
      </SidebarFooter>
      
      <div className="absolute top-4 right-0 translate-x-full">
        <SidebarTrigger />
      </div>
    </SidebarComponent>
  );
};

interface MenuItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const MenuItem = ({ href, icon, label, active }: MenuItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={cn(
        "w-full flex items-center gap-3 px-3 py-2 rounded-md",
        active && "bg-sidebar-accent text-sidebar-accent-foreground"
      )}>
        <Link to={href}>
          {icon}
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default Sidebar;
