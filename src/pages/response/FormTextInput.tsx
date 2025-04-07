type FormTextInputProps = {
  id: string;
  error: string;
  label: string;
  handleChange: any;
  type?: string;
};

const FormTextInput = ({
  id,
  error,
  label,
  handleChange,
  type = "text",
}: FormTextInputProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="p-2 bg-gray-50 border-b-1 border-gray-400"
        type={type}
        id={id}
        onChange={handleChange}
      />
      <p className="text-red-600">{error}</p>
    </div>
  );
};

export default FormTextInput;
