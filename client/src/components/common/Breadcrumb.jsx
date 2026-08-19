import { Link } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';

const Breadcrumb = ({ items, className = '' }) => {
  return (
    <nav className={`flex text-sm text-gray-500 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && <IoChevronForward className="mx-1 text-gray-400" size={14} />}
              {isLast ? (
                <span className="text-[var(--color-text-main)] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="inline-flex items-center hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
