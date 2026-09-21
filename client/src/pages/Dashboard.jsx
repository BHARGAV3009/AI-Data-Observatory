import PageHeader from "../components/common/PageHeader";
import KPIGrid from "../components/dashboard/KPIGrid";
import QualityOverview from "../components/dashboard/QualityOverview";
import DatasetTable from "../components/dashboard/DatasetTable";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickActions from "../components/dashboard/QuickActions";
import { kpiStats, dataQualityMetrics, datasets, recentActivities } from "../components/dashboard/mockData";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Data Observatory"
        subtitle="Intelligent Platform for Enterprise Data Observability and Analytics"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
      />

      {/* KPI Section */}
      <KPIGrid stats={kpiStats} />

      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DatasetTable datasets={datasets} />
        </div>
        <div className="lg:col-span-1">
          <QualityOverview metrics={dataQualityMetrics} />
        </div>
      </div>

      {/* Activity & Actions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        <RecentActivity activities={recentActivities} />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;
