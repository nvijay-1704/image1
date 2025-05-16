
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ScanIssue {
  id: string;
  name: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  location: string;
  x: number;
  y: number;
}

interface BodyScanVisualizerProps {
  issues: ScanIssue[];
  className?: string;
}

const severityColors = {
  low: "bg-blue-500",
  medium: "bg-medical-yellow",
  high: "bg-medical-red"
};

const BodyScanVisualizer = ({ issues, className }: BodyScanVisualizerProps) => {
  const [selectedIssue, setSelectedIssue] = useState<ScanIssue | null>(null);

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Body Scan</CardTitle>
            <CardDescription>
              Live visualization of current scan
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-medical-blue text-white px-2 py-1 bg-opacity-100">
            SCANNING
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-[400px] rounded-lg border bg-card scan-effect grid-bg">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Human body silhouette */}
              <svg width="150" height="340" viewBox="0 0 150 340" className="opacity-70">
                <path 
                  d="M75,30 C91,30 104,17 104,0 C104,-17 91,-30 75,-30 C59,-30 46,-17 46,0 C46,17 59,30 75,30 Z M50,40 L100,40 L110,140 L95,145 L100,220 L85,340 L65,340 L70,220 L55,145 L40,140 Z" 
                  fill="#D1D5DB" 
                  transform="translate(0, 30)"
                />
              </svg>
              
              {/* Issue markers */}
              {issues.map((issue) => (
                <div 
                  key={issue.id}
                  className={cn(
                    "absolute rounded-full cursor-pointer transition-all duration-300",
                    selectedIssue?.id === issue.id ? "h-6 w-6 z-10" : "h-4 w-4",
                    severityColors[issue.severity]
                  )}
                  style={{ 
                    left: `${issue.x}%`, 
                    top: `${issue.y}%`,
                    boxShadow: selectedIssue?.id === issue.id 
                      ? `0 0 0 4px rgba(255,255,255,0.3), 0 0 0 8px ${severityColors[issue.severity]}40` 
                      : `0 0 0 2px rgba(255,255,255,0.3)` 
                  }}
                  onClick={() => setSelectedIssue(issue)}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-medium mb-1">
                {selectedIssue ? selectedIssue.name : "No area selected"}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {selectedIssue 
                  ? selectedIssue.description 
                  : "Click on a highlighted area to see details about the detected issue"
                }
              </p>
              
              {selectedIssue && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{selectedIssue.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Severity:</span>
                    <Badge variant="outline" className={cn(
                      "px-2 py-0.5", 
                      selectedIssue.severity === 'low' ? "text-blue-500 bg-blue-500/10" :
                      selectedIssue.severity === 'medium' ? "text-medical-yellow bg-medical-yellow/10" :
                      "text-medical-red bg-medical-red/10"
                    )}>
                      {selectedIssue.severity.charAt(0).toUpperCase() + selectedIssue.severity.slice(1)}
                    </Badge>
                  </div>
                </div>
              )}
            </div>
            
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-medium mb-3">Scan Parameters</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Resolution:</span>
                  <span>High (1.2mm)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Scan mode:</span>
                  <span>Full body</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">AI model:</span>
                  <span>MedTwin-V2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Scan time:</span>
                  <span>02:34</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BodyScanVisualizer;
