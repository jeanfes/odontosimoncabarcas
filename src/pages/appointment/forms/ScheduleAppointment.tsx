import CustomSelect, {
  type CustomOption,
} from "../../../components/customSelect/CustomSelect";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import DateInput from "../../../components/dateInput/DateInput";
import Button from "../../../components/button/Button";
import React, { useState } from "react";
import "./scheduleAppointment.scss";
import * as Yup from "yup";

interface AppointmentValues {
  firstName: string;
  lastName: string;
  email: string;
  treatment: string;
  date: Date | null;
  time: string;
}

const hoursOptions: CustomOption[] = [
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

const treatmentOptions: CustomOption[] = [
  { value: "cleaning", label: "Limpieza dental" },
  { value: "whitening", label: "Blanqueamiento" },
  { value: "orthodontics", label: "Ortodoncia" },
  { value: "extraction", label: "Extracción" },
];

export const ScheduleAppointment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  const onSubmit = (
    values: AppointmentValues,
    { resetForm }: FormikHelpers<AppointmentValues>
  ) => {
    // Aquí manda a Supabase / EmailJS / WhatsApp / tu API...
    console.log("Formulario enviado:", values);
    alert(
      `Cita agendada ✅\n\n${values.firstName} ${values.lastName}\n${
        values.email
      }\nTratamiento: ${
        values.treatment
      }\nFecha: ${values.date?.toLocaleDateString()}\nHora: ${values.time}`
    );
    resetForm();
    setSelectedDate(null);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="appointment-form">
          <div className="form-row">
            <div className="field-wrapper">
              <label htmlFor="firstName">Nombre</label>
              <Field
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="error"
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="lastName">Apellido</label>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Apellido"
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className="error"
              />
            </div>
          </div>

          <div className="field-wrapper">
            <label htmlFor="email">Correo electrónico</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="tucorreo@gmail.com"
            />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div className="field-wrapper">
            <label htmlFor="treatment">Tipo de tratamiento</label>
            <CustomSelect
              value={values.treatment}
              options={treatmentOptions}
              onChange={(value) => setFieldValue("treatment", value)}
              placeholder="Selecciona un tratamiento"
              inputId="treatment"
            />
            <ErrorMessage name="treatment" component="span" className="error" />
          </div>

          <div className="field-wrapper">
            <label htmlFor="date">Fecha</label>
            <div style={{ width: "100%" }}>
              <DateInput
                id="date"
                value={selectedDate}
                onChange={(day) => {
                  setSelectedDate(day);
                  setFieldValue("date", day);
                }}
                placeholder="Selecciona una fecha"
              />
            </div>
            <ErrorMessage name="date" component="span" className="error" />
          </div>

          <div className="field-wrapper">
            <label htmlFor="time">Horario</label>
            <CustomSelect
              value={values.time}
              options={hoursOptions}
              onChange={(value) => setFieldValue("time", value)}
              placeholder="Selecciona un horario"
              inputId="time"
            />
            <ErrorMessage name="time" component="span" className="error" />
          </div>

          <div style={{ marginTop: 8 }}>
            <Button text="ENVIAR SOLICITUD" design="primary" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ScheduleAppointment;
