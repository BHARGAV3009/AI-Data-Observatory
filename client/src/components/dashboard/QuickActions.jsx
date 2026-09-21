import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import Button from "../common/Button";
import { ROUTES } from "../../constants/routes";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    { label: "Upload Dataset", route: ROUTES.UPLOAD_DATA, variant: "primary" },
    { label: "View Data Quality", route: ROUTES.DATA_QUALITY, variant: "secondary" },
    { label: "Open Analytics", route: ROUTES.ANALYTICS, variant: "secondary" },
    { label: "Generate Report", route: ROUTES.REPORTS, variant: "outline" },
  ];

  return (
    <Card title="Quick Actions" className="h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            onClick={() => navigate(action.route)}
            className="w-full justify-center py-3"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;
