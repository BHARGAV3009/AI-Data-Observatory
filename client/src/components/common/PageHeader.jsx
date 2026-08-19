import Breadcrumb from "./Breadcrumb";

const PageHeader = ({ title, subtitle, breadcrumbs, action }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} className="mb-2" />}
        <h1 className="text-2xl font-bold text-[var(--color-text-main)]">
          {title}
        </h1>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
};

export default PageHeader;
