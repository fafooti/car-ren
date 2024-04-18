const Input = ({
  label,
  className,
  name,
  placeholder,
  value,
  variant,
  desc,
  onKeyDown,
  onChange,
  type,
  error,
  tooltip,
  ...props
}) => {
  const handleClickEnter = (e) => {
    if (onKeyDown) {
      if (e.key === "Enter") {
        onKeyDown(e);
      }
    }
  };

//   const inputClassName = `outline outline-1 bg-transparent outline-borderColor dark:outline-darkModeBorderColor p-3 rounded-5 ${
//     error ? " light:outline-red-500 dark:outline-red-500" : ""
//   }`;
  return (
    <div
      className="relative flex flex-col gap-2 text-blackText dark:text-white py-1"
      name={name}
    >
      {label && <label className="text-black text-md ">{label}</label>}
      {desc && <p className="text-secondaryGray text-sm" >{desc}</p>}
      <input
        className={` ${className ?? ""}`}
        placeholder={placeholder}
        value={value}
        onKeyDown={handleClickEnter}
        onChange={onChange}
        name={name}
        {...props}
      />
      {/* {error && (
        <p className="absolute -bottom-5 text-xs">{error}</p>
      )} */}
    </div>
  );
};

export default Input;
