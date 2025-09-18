import Select, { type StylesConfig } from "react-select";
import "./customSelect.scss";

export interface CustomOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  options: CustomOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  inputId?: string;
  isSearchable?: boolean;
}

const customStyles: StylesConfig<CustomOption, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: "5.2rem",
    height: "5.2rem",
    borderRadius: 8,
    border: `1px solid var(--grey)`,
    boxShadow: state.isFocused ? "0 6px 18px rgba(0,0,0,0.06)" : "none",
    transition: "border-color 0.18s ease, box-shadow 0.18s ease",
    background: "transparent",
    "&:hover": {
      borderColor: "var(--accent)",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 1.8rem",
    height: "5rem",
  }),
  input: (base) => ({ ...base, margin: 0, padding: 0 }),
  placeholder: (base) => ({
    ...base,
    color: "var(--muted-text)",
    opacity: 0.9,
    fontSize: "1.6rem",
    fontFamily: "var(--font-family)",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--text-color)",
    fontSize: "1.6rem",
    fontFamily: "var(--font-family)",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    borderRadius: 8,
    boxShadow: "var(--shadow-soft)",
    overflow: "hidden",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "1.6rem",
    fontFamily: "var(--font-family)",
    padding: "0.9rem 1.2rem",
    background: state.isFocused ? "rgba(0,0,0,0.08)" : "transparent",
    color: state.isSelected ? "var(--accent)" : "var(--text-color)",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "var(--secondary-color)",
    padding: "0 1rem",
  }),
};

export default function CustomSelect({
  value,
  options,
  onChange,
  placeholder = "Selecciona una opción",
  inputId,
  isSearchable = false,
}: CustomSelectProps) {
  return (
    <Select
      classNamePrefix="react-select"
      inputId={inputId}
      options={options}
      onChange={(opt) => onChange(opt ? opt.value : "")}
      value={options.find((opt) => opt.value === value) || null}
      placeholder={placeholder}
      styles={customStyles}
      isSearchable={isSearchable}
      menuPortalTarget={typeof document !== "undefined" ? document.body : null}
      menuPosition="fixed"
    />
  );
}
