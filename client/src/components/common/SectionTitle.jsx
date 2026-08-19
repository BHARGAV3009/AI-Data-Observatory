const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-xl font-semibold text-[var(--color-text-main)]">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
