
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Patient {
  id: string;
  name: string;
  age: number;
  status: 'stable' | 'critical' | 'moderate';
  condition: string;
  lastScan: string;
  avatar?: string;
}

interface PatientListProps {
  patients: Patient[];
  className?: string;
}

const statusColors = {
  stable: "bg-medical-green text-medical-green bg-opacity-15",
  moderate: "bg-medical-yellow text-medical-yellow bg-opacity-15",
  critical: "bg-medical-red text-medical-red bg-opacity-15"
};

const statusLabels = {
  stable: "Stable",
  moderate: "Moderate",
  critical: "Critical"
};

const PatientList = ({ patients, className }: PatientListProps) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Recent Patients</CardTitle>
        <CardDescription>
          You have {patients.length} patients in the system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead className="hidden md:table-cell">Last Scan</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
                      <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-xs text-muted-foreground">{patient.age} years</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn("px-2 py-0.5", statusColors[patient.status])}>
                    {statusLabels[patient.status]}
                  </Badge>
                </TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell className="hidden md:table-cell">{patient.lastScan}</TableCell>
                <TableCell className="text-right">
                  <button className="text-sm font-medium text-primary hover:underline">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PatientList;
