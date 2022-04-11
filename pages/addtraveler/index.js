import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import { userValidationSchema as schema } from "../../services/utils/registerValidation";

import styles from "./addTraveler.module.scss";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import TravelList from "../../components/Travels/TravelList";

// import { getPosts } from "../services";

const AddTraveler = () => {
  const intialValues = {
    cedula: "",
    nombre: "",
    fecha_nacimiento: "",
    telefono: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: intialValues,
    mode: "onBlur",
    // resolver: yupResolver(schema),
  });

  const onSubmit = (values, { resetForm }) => {
    alert("actualizar usuario");
    // RegisterUser(values);
  };

  return (
    <section className={styles.addTravelerSection}>
      <h2 className={styles.addTravelerTitle}>Agregar Viajero</h2>
      <div className={styles.addTravelerCont}>
        <Link href="/travellers" passHref>
          <button className={styles.addTravelerBack}>
            <FaArrowLeft className={styles.addTravelerIcon} />
            Back
          </button>
        </Link>
      </div>
      {/* Ingresar Datos basicos del viajero */}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
          <label>Cedula:</label>
          <input {...register("cedula")} placeholder="Cedula" />
          <p className="error">{errors?.cedula?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>Nombre:</label>
          <input {...register("user_name")} placeholder="Name" />
          <p className="error">{errors?.user_name?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>Fecha Nacimiento :</label>
          <input
            {...register("fecha_nacimiento")}
            placeholder="Fecha de Nacimiento"
            type="date"
          />
          <p className="error">{errors?.fecha_nacimiento?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>Telefono:</label>
          <input {...register("telefono")} placeholder="Telefono" />
          <p className="error">{errors?.telefono?.message}</p>
        </div>

        <TravelList />

        <button type="submit"> Agregar Viajero </button>
      </form>
      {/* Ingresar Datos de los viajes */}
    </section>
  );
};

export default AddTraveler;
