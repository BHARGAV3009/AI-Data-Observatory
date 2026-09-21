export const kpiStats = [
  { title: "Total Datasets", value: "24" },
  { title: "Data Quality Score", value: "94.2%" },
  { title: "Active Data Sources", value: "8" },
  { title: "Data Issues", value: "17" },
];

export const dataQualityMetrics = [
  { label: "Overall Quality", score: 94, color: "bg-blue-500" },
  { label: "Completeness", score: 98, color: "bg-green-500" },
  { label: "Accuracy", score: 92, color: "bg-indigo-500" },
  { label: "Consistency", score: 89, color: "bg-yellow-500" },
  { label: "Validity", score: 96, color: "bg-purple-500" },
];

export const datasets = [
  { id: 1, name: "Customer Transactions", source: "PostgreSQL DB", records: "1.2M", quality: 98, lastUpdated: "2 mins ago", status: "Healthy" },
  { id: 2, name: "Web Analytics Events", source: "AWS S3", records: "4.5M", quality: 92, lastUpdated: "1 hour ago", status: "Healthy" },
  { id: 3, name: "Support Tickets", source: "Zendesk API", records: "85K", quality: 78, lastUpdated: "3 hours ago", status: "Warning" },
  { id: 4, name: "Marketing Campaigns", source: "Salesforce", records: "12K", quality: 95, lastUpdated: "1 day ago", status: "Healthy" },
  { id: 5, name: "IoT Sensor Data", source: "Kafka Stream", records: "8.9M", quality: 65, lastUpdated: "Just now", status: "Critical" },
];

export const recentActivities = [
  { id: 1, type: "upload", message: "Dataset 'Customer Transactions' uploaded.", timestamp: "10 mins ago" },
  { id: 2, type: "check", message: "Data quality check completed for 'Web Analytics Events'.", timestamp: "1 hour ago" },
  { id: 3, type: "issue", message: "Quality issue detected in 'IoT Sensor Data' (missing values).", timestamp: "2 hours ago" },
  { id: 4, type: "update", message: "Dataset 'Support Tickets' updated.", timestamp: "3 hours ago" },
  { id: 5, type: "report", message: "Weekly Data Quality Report generated.", timestamp: "1 day ago" },
];
