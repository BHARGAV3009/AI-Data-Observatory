const Card = ({
  children,
  title,
  subtitle,
  className = '',
  bodyClassName = '',
  headerAction = null,
  ...props
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden ${className}`}
      {...props}
    >
      {(title || subtitle || headerAction) && (
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            {title && <h3 className="text-lg font-semibold text-[var(--color-text-main)]">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className={`p-6 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
