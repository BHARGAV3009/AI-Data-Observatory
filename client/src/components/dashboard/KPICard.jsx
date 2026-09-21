import Card from "../common/Card";

const KPICard = ({ title, value }) => {
  return (
    <Card className="text-center">
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-[var(--color-text-main)]">{value}</p>
    </Card>
  );
};

export default KPICard;
