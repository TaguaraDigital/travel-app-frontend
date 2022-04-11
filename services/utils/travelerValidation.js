import * as Yup from "yup";

/*
 Ver el repositorio para mas valdaciones
https://github.com/vikas62081/YT/tree/advanceFormValidation 
https://www.youtube.com/watch?v=wfogZfIS03U
*/

import { regExp } from "./regExp";

export const travelerValidation = Yup.object().shape({
  cedula: Yup.string().required("Requerido"),
  nombre: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .max(50, "Muy largo, máximo 50 caracteres")
    .required("Obligatorio"),
  fecha_nacimiento: Yup.date()
    .max(new Date(), "No puede ser una fecha futura")
    .required("Required"),
  telefono: Yup.string()
    .min(7, "Debe tener 7 0 mas digitos")
    .matches(regExp.telefono, "Teléfono invalido")
    .required("Requerido"),
});
