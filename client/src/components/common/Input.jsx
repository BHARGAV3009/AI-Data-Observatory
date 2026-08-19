import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  id,
  type = 'text',
  error,
  helperText,
  className = '',
  containerClassName = '',
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={`
          block w-full rounded-md border-gray-300 border px-4 py-2 
          text-gray-900 shadow-sm focus:border-[var(--color-primary)] 
          focus:ring-[var(--color-primary)] sm:text-sm
          disabled:bg-gray-50 disabled:text-gray-500
          ${error ? 'border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-[var(--color-danger)]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
