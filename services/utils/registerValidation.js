import * as Yup from "yup";

/*
 Ver el repositorio para mas valdaciones
https://github.com/vikas62081/YT/tree/advanceFormValidation 
https://www.youtube.com/watch?v=wfogZfIS03U
*/

import { regExp } from "./regExp";

export const userValidationSchema = Yup.object().shape({
  identification: Yup.string()
    .matches(regExp.VesIdent, "Introduzca una identificación valida")
    .required("Requerido"),
  user_name: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .matches(regExp.name, "Introduzca un nombre valido")
    .required("Requerido"),
  email: Yup.string().email("Email invalido").required("Requerido"),
  // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
  password: Yup.string()
    .min(8, "Debe tener 8 o mas caracters")
    .matches(
      regExp.password,
      "La clave debe tener al menos una mayúscula, una minúscula, un número y un símbolo especial"
    )
    .required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las claves no coinciden")
    .required("Obligatorio"),
});
