import Card from "../common/Card";

const DatasetTable = ({ datasets }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Healthy":
        return "bg-green-100 text-green-800";
      case "Warning":
        return "bg-yellow-100 text-yellow-800";
      case "Critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card title="Dataset Overview" className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dataset
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Source
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Records
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quality
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Updated
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {datasets.map((dataset) => (
            <tr key={dataset.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--color-text-main)]">
                {dataset.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dataset.source}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dataset.records}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dataset.quality}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dataset.lastUpdated}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                    dataset.status
                  )}`}
                >
                  {dataset.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {datasets.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Demo data — connected data sources will appear here.
        </div>
      )}
    </Card>
  );
};

export default DatasetTable;
