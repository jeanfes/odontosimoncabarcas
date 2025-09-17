/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/ScheduleAppointment.tsx
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Button from "../../../components/button/Button"; // ajusta ruta
import "./scheduleAppointment.scss";
import DateInput from "../../../components/dateInput/DateInput";

interface AppointmentValues {
  firstName: string;
  lastName: string;
  email: string;
  treatment: string;
  date: Date | null;
  time: string;
}

type Option = { value: string; label: string };

/**
 * MOCK: reemplaza esto por tu llamada real a Supabase / API
 * devuelve opciones de horarios disponibles para una fecha dada
 */
const fetchAvailableHoursForDate = async (
  date: Date | null
): Promise<Option[]> => {
  await new Promise((r) => setTimeout(r, 250)); // simula latencia
  if (!date) return [];
  const day = date.getDay();
  if (day === 0) return []; // domingos sin horarios
  if (day === 6)
    return [
      { value: "10:00", label: "10:00 AM" },
      { value: "11:00", label: "11:00 AM" },
    ];
  return [
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "15:00", label: "03:00 PM" },
    { value: "16:00", label: "04:00 PM" },
  ];
};

/**
 * HoursFetcher: componente que, cuando cambia `date`, carga horarios y actualiza estados del padre.
 * - usa useEffect (válido porque es un componente React)
 * - limpia la hora seleccionada si ésta ya no está disponible
 */
function HoursFetcher(props: {
  date: Date | null;
  currentTime: string;
  setHoursOptions: (opts: Option[]) => void;
  setLoadingHours: (b: boolean) => void;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}) {
  const { date, currentTime, setHoursOptions, setLoadingHours, setFieldValue } =
    props;

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingHours(true);
      try {
        const list = await fetchAvailableHoursForDate(date);
        if (!mounted) return;
        setHoursOptions(list);

        // si la hora actual ya no está en la lista, limpiarla
        if (currentTime && !list.find((l) => l.value === currentTime)) {
          setFieldValue("time", "");
        }
      } catch (err) {
        console.error("Error al cargar horarios:", err);
        if (mounted) setHoursOptions([]);
      } finally {
        if (mounted) setLoadingHours(false);
      }
    })();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]); // depende solo de date

  return null; // no renderiza nada visible
}

export const ScheduleAppointment: React.FC = () => {
  const [hoursOptions, setHoursOptions] = useState<Option[]>([]);
  const [loadingHours, setLoadingHours] = useState(false);

  const initialValues: AppointmentValues = {
    firstName: "",
    lastName: "",
    email: "",
    treatment: "",
    date: null,
    time: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("El nombre es obligatorio"),
    lastName: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    treatment: Yup.string().required("Selecciona un tratamiento"),
    date: Yup.date().nullable().required("Selecciona una fecha"),
    time: Yup.string().required("Selecciona un horario"),
  });

  const onSubmit = async (
    values: AppointmentValues,
    { resetForm }: FormikHelpers<AppointmentValues>
  ) => {
    // Aquí: guarda en Supabase / llama tu API / EmailJS / WhatsApp
    console.log("Formulario enviado:", values);
    alert(
      `Cita solicitada:\n\n${values.firstName} ${values.lastName}\n${
        values.email
      }\nTratamiento: ${
        values.treatment
      }\nFecha: ${values.date?.toLocaleDateString()}\nHora: ${values.time}`
    );

    // reset visual + limpiar opciones
    resetForm();
    setHoursOptions([]);
  };

  return (
    <div className="appointment-form">
      <h2 className="form-title">Agendar cita</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form>
            {/* Componente que se encarga de cargar horas cuando values.date cambia */}
            <HoursFetcher
              date={values.date}
              currentTime={values.time}
              setHoursOptions={setHoursOptions}
              setLoadingHours={setLoadingHours}
              setFieldValue={setFieldValue}
            />

            <div className="form-row">
              <div className="field-wrapper">
                <label htmlFor="firstName">Nombre</label>
                <Field id="firstName" name="firstName" placeholder="Nombre" />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="field-wrapper">
                <label htmlFor="lastName">Apellido</label>
                <Field id="lastName" name="lastName" placeholder="Apellido" />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="error"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field-wrapper">
                <label htmlFor="email">Correo electrónico</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="tucorreo@gmail.com"
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
              <div className="field-wrapper">
                <label htmlFor="treatment">Tipo de tratamiento</label>
                <Field as="select" id="treatment" name="treatment">
                  <option value="">Selecciona el tipo de tratamiento</option>
                  <option value="cleaning">Limpieza</option>
                  <option value="whitening">Blanqueamiento</option>
                  <option value="orthodontics">Ortodoncia</option>
                  <option value="extraction">Extracción</option>
                </Field>
                <ErrorMessage
                  name="treatment"
                  component="span"
                  className="error"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field-wrapper">
                <label htmlFor="date">Fecha</label>
                <DateInput
                  id="date"
                  value={values.date}
                  onChange={(d) => setFieldValue("date", d)}
                  minDate={new Date()}
                />
                <ErrorMessage name="date" component="span" className="error" />
              </div>
              <div className="field-wrapper">
                <label htmlFor="time">Horario</label>
                <Select
                  classNamePrefix="react-select"
                  options={hoursOptions}
                  onChange={(option) =>
                    setFieldValue("time", option?.value || "")
                  }
                  value={
                    hoursOptions.find((opt) => opt.value === values.time) ||
                    null
                  }
                  placeholder={
                    loadingHours
                      ? "Cargando horarios..."
                      : hoursOptions.length
                      ? "Selecciona un horario"
                      : "Selecciona primero una fecha"
                  }
                  isDisabled={loadingHours || hoursOptions.length === 0}
                  instanceId="select-time"
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: "5rem",
                      height: "5rem",
                      borderRadius: "8px",
                      fontSize: "1.4rem",
                      fontFamily: "var(--font-family)",
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      padding: "0 1.4rem",
                    }),
                  }}
                />
                <ErrorMessage name="time" component="span" className="error" />
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <Button
                text="ENVIAR SOLICITUD"
                design="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ width: "100%", height: "5rem", fontSize: "1.6rem" }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ScheduleAppointment;
