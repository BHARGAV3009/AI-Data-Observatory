import KPICard from "./KPICard";

const KPIGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <KPICard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default KPIGrid;
