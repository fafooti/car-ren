function Button({ children, icon, className, onClick, type, disabled }) {
  return (
    <button
      className={`flex gap-2  text-xs rounded justify-center items-center  ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {icon && <img src={icon.src}/>}
      {children}
    </button>
  );
}

export default Button;
