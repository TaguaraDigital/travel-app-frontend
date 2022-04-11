import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Store } from "../../utils/store";
import moment from "moment";

import { travelerValidation as schema } from "../../services/utils/travelerValidation";

import styles from "./addTraveler.module.scss";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import TravelList from "../../components/Travels/TravelList";
import TravellersFinder from "../../services/apis/travellersFinder";

const AddTraveler = () => {
  const { travelOfTraveler } = useContext(Store);

  const intialValues = {
    cedula: "",
    nombre: "",
    fecha_nacimiento: "",
    telefono: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: intialValues,
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const InsertTraveler = async (traveler) => {
    try {
      const response = await TravellersFinder.create(traveler);
      console.log(response);
      if (response.success) {
        alert("VIAJERO CREADO EXITOSAMENTE");
      } else {
        console.log("error", response.message);
        alert("error" + response.message);
      }
    } catch (err) {}
  };

  const onSubmit = (values) => {
    const newTraveler = {};

    values.fecha_nacimiento = moment(values.fecha_nacimiento).format(
      "YYYY-MM-DD"
    );
    newTraveler["viajero"] = { ...values };
    newTraveler["viajes"] = [...travelOfTraveler];
    InsertTraveler(newTraveler);
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
        <div className={styles.groupField}>
          <div className={styles.formField}>
            <label>Cedula:</label>
            <input {...register("cedula")} placeholder="Cedula" />
            <p className={styles.error}>{errors?.cedula?.message}</p>
          </div>

          <div className={styles.formField}>
            <label>Nombre:</label>
            <input {...register("nombre")} placeholder="Nombre" />
            <p className={styles.error}>{errors?.nombre?.message}</p>
          </div>

          <div className={styles.formField}>
            <label>Fecha Nacimiento :</label>
            <input
              {...register("fecha_nacimiento")}
              placeholder="Fecha de Nacimiento"
              type="date"
            />
            <p className={styles.error}>{errors?.fecha_nacimiento?.message}</p>
          </div>

          <div className={styles.formField}>
            <label>Telefono:</label>
            <input {...register("telefono")} placeholder="Telefono" />
            <p className={styles.error}>{errors?.telefono?.message}</p>
          </div>
        </div>

        <TravelList />

        <button type="submit"> Agregar Viajero </button>
      </form>
    </section>
  );
};

export default AddTraveler;
