import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";

const Dashboard = () => {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your data observatory platform"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Data Sources", value: "14" },
          { title: "Active Models", value: "6" },
          { title: "Data Quality Score", value: "92%" },
          { title: "Anomalies Detected", value: "3" },
        ].map((stat, i) => (
          <Card key={i} className="text-center">
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              {stat.title}
            </h3>
            <p className="text-3xl font-bold text-[var(--color-text-main)]">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity" className="min-h-[300px] flex flex-col">
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Activity list placeholder
          </div>
        </Card>
        <Card title="System Health" className="min-h-[300px] flex flex-col">
          <div className="flex-1 flex items-center justify-center text-gray-400">
            System health chart placeholder
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
