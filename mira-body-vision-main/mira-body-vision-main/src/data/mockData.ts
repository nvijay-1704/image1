
// Mock data for the Bio_Twin_X dashboard

// Recent patients
export const recentPatients = [
  {
    id: "p1",
    name: "James Wilson",
    age: 42,
    status: "critical" as const,
    condition: "Internal hemorrhage",
    lastScan: "Just now",
    avatar: "/placeholder.svg"
  },
  {
    id: "p2",
    name: "Sarah Johnson",
    age: 35,
    status: "stable" as const,
    condition: "Post-surgical monitoring",
    lastScan: "2 hours ago",
    avatar: "/placeholder.svg"
  },
  {
    id: "p3",
    name: "Robert Chen",
    age: 58,
    status: "moderate" as const,
    condition: "Suspected liver trauma",
    lastScan: "4 hours ago",
    avatar: "/placeholder.svg"
  },
  {
    id: "p4",
    name: "Maria Garcia",
    age: 29,
    status: "stable" as const,
    condition: "Minor fractures",
    lastScan: "Yesterday",
    avatar: "/placeholder.svg"
  },
  {
    id: "p5",
    name: "David Kim",
    age: 47,
    status: "critical" as const,
    condition: "Internal bleeding",
    lastScan: "Yesterday",
    avatar: "/placeholder.svg"
  }
];

// Scan issues for body visualizer
export const scanIssues = [
  {
    id: "i1",
    name: "Splenic Hemorrhage",
    description: "Active bleeding detected in the splenic region with approximately 500ml blood loss.",
    severity: "high" as const,
    location: "Upper left quadrant",
    x: 43,
    y: 40
  },
  {
    id: "i2",
    name: "Liver Contusion",
    description: "Grade II contusion on the right lobe of the liver without active bleeding.",
    severity: "medium" as const,
    location: "Upper right quadrant",
    x: 57,
    y: 38
  },
  {
    id: "i3",
    name: "Rib Fracture",
    description: "Hairline fracture on the 7th and 8th ribs, right side.",
    severity: "low" as const,
    location: "Right lateral thoracic",
    x: 60,
    y: 28
  },
  {
    id: "i4",
    name: "Pulmonary Contusion",
    description: "Minor contusion in the lower right lung, minimal effect on respiratory function.",
    severity: "low" as const,
    location: "Lower right lung",
    x: 55,
    y: 33
  }
];

// Chart data for vital metrics
export const vitalMetricsData = [
  { time: "00:00", heartRate: 82, bloodPressure: 124, oxygenLevel: 97 },
  { time: "00:05", heartRate: 84, bloodPressure: 125, oxygenLevel: 97 },
  { time: "00:10", heartRate: 85, bloodPressure: 126, oxygenLevel: 96 },
  { time: "00:15", heartRate: 87, bloodPressure: 128, oxygenLevel: 96 },
  { time: "00:20", heartRate: 90, bloodPressure: 130, oxygenLevel: 95 },
  { time: "00:25", heartRate: 92, bloodPressure: 135, oxygenLevel: 94 },
  { time: "00:30", heartRate: 95, bloodPressure: 138, oxygenLevel: 94 },
  { time: "00:35", heartRate: 96, bloodPressure: 140, oxygenLevel: 93 },
  { time: "00:40", heartRate: 94, bloodPressure: 138, oxygenLevel: 94 },
  { time: "00:45", heartRate: 92, bloodPressure: 136, oxygenLevel: 95 },
  { time: "00:50", heartRate: 90, bloodPressure: 134, oxygenLevel: 95 },
  { time: "00:55", heartRate: 88, bloodPressure: 130, oxygenLevel: 96 },
  { time: "01:00", heartRate: 85, bloodPressure: 127, oxygenLevel: 97 }
];

// Dashboard stats
export const dashboardStats = [
  {
    title: "Active Scans",
    value: "3",
    description: "Currently running scans",
    trend: { value: 12, isPositive: true }
  },
  {
    title: "Patients Today",
    value: "24",
    description: "Total patients scanned",
    trend: { value: 8, isPositive: true }
  },
  {
    title: "Critical Cases",
    value: "5",
    description: "Requiring immediate attention",
    trend: { value: 2, isPositive: false }
  },
  {
    title: "Avg. Scan Time",
    value: "3.2m",
    description: "Average scan duration",
    trend: { value: 15, isPositive: true }
  }
];
