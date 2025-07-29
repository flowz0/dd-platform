interface Props {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

export default function TextArea({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm">
        {label}
        {required && <span className="text-secondary ml-1">*</span>}
      </label>
      <textarea 
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={4}
        required={required}
        className={`bg-white90 text-white25 mt-2 py-3 px-5 rounded-lg outline-none resize-none placeholder:text-white50 ${
          error ? "ring-2 ring-offset-2 ring-secondary" : "focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-sm text-secondary mt-2" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}