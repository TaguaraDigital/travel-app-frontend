import * as Yup from "yup";

/*
 Ver el repositorio para mas valdaciones
https://github.com/vikas62081/YT/tree/advanceFormValidation 
https://www.youtube.com/watch?v=wfogZfIS03U
*/

import { regExp } from "./regExp";

export const userValidation = Yup.object().shape({
  codClie: Yup.string()
    .matches(regExp.VesIdent, "Introduzca una identificación valida")
    .required("Requerido"),
  user_name: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .max(50, "Muy largo, máximo 50 caracteres")
    .required("Obligatorio"),
  // represent_name: Yup.string().max(50, "Muy largo, máximo 50 caracteres"),
  // address: Yup.string()
  //   .min(3, "Debe tener más de 3 letras")
  //   .required("Obligatorio"),
  // zip_code: Yup.string().required("Requerido"),
  // phone1: Yup.string()
  //   .min(10, "Debe tener 10 digitos")
  //   .matches(regExp.phone1, "Teléfono invalido")
  //   .required("Requerido"),
  // phone2: Yup.string()
  //   .min(10, "Debe tener 10 digitos")
  //   .matches(regExp.phone2, "Teléfono invalido")
  //   .required("Requerido"),
  // phone3: Yup.string()
  //   .min(10, "Debe tener 10 digitos")
  //   .matches(regExp.phone3, "Teléfono invalido")
  //   .required("Requerido"),
  // email: Yup.string()
  //   .email("Email invalido")
  //   .typeError("Email invalido")
  //   .required("Requerido"),
  // password: Yup.string()
  //   .min(8, "Debe tener 8 o mas caracters")
  //   .matches(
  //     regExp.password,
  //     "La clave debe tener al menos una mayúscula, una minúscula, un número y un símbolo especial"
  //   )
  //   .required("Required"),
  // passwordConfirm: Yup.string()
  //   .oneOf([Yup.ref("password")], "Las claves no coinciden")
  //   .required("Obligatorio"),
});
