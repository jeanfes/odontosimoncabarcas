import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DateInputProps {
  id?: string;
  value: Date | null;
  onChange: (d: Date | null) => void;
  placeholder?: string;
  minDate?: Date;
}

export default function DateInput({
  id,
  value,
  onChange,
  placeholder = "Selecciona una fecha",
  minDate,
}: DateInputProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const formatted = value
    ? value.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div className="date-input" ref={rootRef}>
      <div
        className="date-input-row"
        role="button"
        tabIndex={0}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen((s) => !s);
        }}
      >
        <div className="date-input-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <rect
              x="3"
              y="5"
              width="18"
              height="16"
              rx="3"
              stroke="#d4af37"
              strokeWidth="2"
            />
            <path
              d="M16 3v4M8 3v4"
              stroke="#d4af37"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect x="7" y="11" width="2" height="2" rx="1" fill="#d4af37" />
            <rect x="11" y="11" width="2" height="2" rx="1" fill="#d4af37" />
            <rect x="15" y="11" width="2" height="2" rx="1" fill="#d4af37" />
          </svg>
        </div>
        <input
          id={id}
          readOnly
          value={formatted}
          placeholder={placeholder}
          aria-haspopup="dialog"
          className="date-input-field"
        />
        <button
          type="button"
          aria-label="Abrir calendario"
          className="date-toggle"
          onClick={(ev) => {
            ev.stopPropagation();
            setOpen((s) => !s);
          }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              d="M7 10l5 5 5-5"
              stroke="#d4af37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="date-popover" role="dialog" aria-modal="false">
          <div className="rdp-wrapper">
            <DayPicker
              mode="single"
              selected={value || undefined}
              onSelect={(d) => {
                onChange(d ?? null);
                setOpen(false);
              }}
              {...(minDate ? { disabled: { before: minDate } } : {})}
            />
          </div>
        </div>
      )}
    </div>
  );
}
