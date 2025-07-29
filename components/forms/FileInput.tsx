import Image from "next/image";

interface CustomFileInputProps {
  name: string;
  label: string;
  onChange: (file: File | null) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  previewUrl?: string | null;
}

export default function FileInput({
  name,
  label,
  onChange,
  onBlur,
  error,
  required,
  previewUrl,
}: CustomFileInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm">
        {label}
        {required && <span className="text-secondary ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          onChange(file);
        }}
        onBlur={onBlur}
        className="hidden"
      />
      <div className={`text-white25 mt-2 rounded-lg outline-none flex items-center gap-x-4 w-fit`}>
        <label
          htmlFor={name}
          className={`cursor-pointer bg-primary text-white95 px-4 py-2 rounded-md font-semibold hover:bg-primary ${error ? "ring-2 ring-offset-2 ring-secondary" : "focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            }`}
        >
          Choose image
        </label>
        <span className="text-sm text-[hsl(0,0%,40%)]">
          {previewUrl ? "Image selected" : "No image chosen"}
        </span>
      </div>
      {previewUrl && typeof previewUrl === "string" && (
        <Image
          src={previewUrl}
          alt="Preview"
          height={1920}
          width={1080}
          className="mt-4 object-cover rounded-md ring-4 ring-offset-2 ring-primary sm:max-w-[200px] sm:ml-1.5"
        />
      )}
      {error && <p className="text-sm text-secondary mt-2">{error}</p>}
    </div>
  );
}
