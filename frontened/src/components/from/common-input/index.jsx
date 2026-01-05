function Common_input({
  label, type = "text", placeholder, id, value, name, onChange
}) {
  return (
    /* flex-col ensures the label stays ABOVE the input */
    <div className="flex flex-col gap-2 mb-4 w-full text-left">
      <label 
        htmlFor={id} 
        className="text-zinc-400 text-sm font-medium tracking-wide"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="w-full bg-[#2a2a2a] border border-zinc-800 rounded-lg p-3 text-white 
                   placeholder-zinc-600 outline-none focus:ring-2 focus:ring-blue-600 
                   transition-all duration-200"
      />
    </div>
  );
}

export default Common_input;