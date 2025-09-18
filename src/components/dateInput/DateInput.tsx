import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import "./dateInput.scss";

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
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
      <div className="date-input-wrapper">
        {/* Icono calendario dentro del input */}
        <span className="date-input-icon">
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
        </span>

        {/* Campo de fecha */}
        <input
          id={id}
          readOnly
          value={formatted}
          placeholder={placeholder}
          className="date-input-field"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        />

        {/* Flechita toggle dentro del input */}
        <button
          type="button"
          aria-label="Abrir calendario"
          className="date-toggle"
          onClick={() => setOpen((s) => !s)}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </button>
      </div>

      {open && (
        <div className="date-popover" role="dialog" aria-modal="false">
          <DayPicker
            mode="single"
            selected={value || undefined}
            onSelect={(d) => {
              onChange(d ?? null);
              setOpen(false);
            }}
            locale={es}
            formatters={{
              formatMonthCaption: (date) => {
                const meses = [
                  "Enero",
                  "Febrero",
                  "Marzo",
                  "Abril",
                  "Mayo",
                  "Junio",
                  "Julio",
                  "Agosto",
                  "Septiembre",
                  "Octubre",
                  "Noviembre",
                  "Diciembre",
                ];
                const mes = meses[date.getMonth()];
                return `${mes} ${date.getFullYear()}`;
              },
            }}
            {...(minDate ? { disabled: { before: minDate } } : {})}
          />
        </div>
      )}
    </div>
  );
}
