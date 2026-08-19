import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";

const GenericPage = ({ title, description }) => {
  return (
    <div>
      <PageHeader
        title={title}
        subtitle={description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <Card className="min-h-[400px] flex flex-col">
        <div className="flex-1 flex items-center justify-center text-gray-400">
          {title} content placeholder
        </div>
      </Card>
    </div>
  );
};

export default GenericPage;
