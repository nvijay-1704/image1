
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface UploadDataCardProps {
  className?: string;
}

const UploadDataCard = ({ className }: UploadDataCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [sensorId, setSensorId] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleFileUpload = () => {
    toast.success('Scan data uploaded successfully', {
      description: 'Processing data with Bio_Twin_X AI...',
    });
  };

  const handleSensorConnect = () => {
    if (!sensorId.trim()) {
      toast.error('Please enter a valid sensor ID');
      return;
    }

    setIsConnecting(true);
    
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      toast.success('Sensor connected successfully', {
        description: `Live data streaming from sensor ${sensorId}`,
      });
    }, 2000);
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Upload Scan Data</CardTitle>
        <CardDescription>
          Upload sensor data or connect to a live sensor feed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="upload">File Upload</TabsTrigger>
            <TabsTrigger value="livefeed">Live Sensor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload">
            <div
              className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center",
                isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20",
                "transition-colors duration-200"
              )}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFileUpload();
              }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-1">Drag and drop scan files</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Support for DICOM, NIFTI, or proprietary Bio_Twin_X formats
              </p>
              <div className="flex justify-center">
                <Button variant="outline" onClick={handleFileUpload}>
                  Select File
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="livefeed">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sensor-id">Sensor Device ID</Label>
                <Input
                  id="sensor-id"
                  placeholder="Enter sensor ID or MAC address"
                  value={sensorId}
                  onChange={(e) => setSensorId(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sensor-type">Sensor Type</Label>
                <select
                  id="sensor-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="bt-scan-v2">BioTwin Scanner V2</option>
                  <option value="medisense-pro">MediSense Pro</option>
                  <option value="nain-scanner">NAIN Official Scanner</option>
                  <option value="custom">Custom Device</option>
                </select>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleSensorConnect}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <>
                    <Activity className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  'Connect to Sensor'
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UploadDataCard;
