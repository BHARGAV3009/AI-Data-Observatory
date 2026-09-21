import Card from "../common/Card";

const QualityOverview = ({ metrics }) => {
  return (
    <Card title="Data Quality Overview" className="h-full flex flex-col">
      <div className="flex-1 space-y-6 mt-2">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">{metric.label}</span>
              <span className="text-sm font-semibold text-[var(--color-text-main)]">
                {metric.score}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${metric.color} h-2 rounded-full`}
                style={{ width: `${metric.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default QualityOverview;
