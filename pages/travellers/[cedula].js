import { useState, useEffect, useContext } from "react";
import { Store } from "../../utils/store";

import TravellersFinder from "../../services/apis/travellersFinder";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";

import styles from "./viewTraveler.module.scss";
import { FaArrowLeft } from "react-icons/fa";

const ViewTraveler = () => {
  const { travellers } = useContext(Store);
  const cedula = useRouter().query.cedula;
  const [current, setCurrent] = useState({});

  const fetchData = async (cedula) => {
    const response = await TravellersFinder.byId(cedula);
    setCurrent(response.data[0]);
    return;
  };

  useEffect(() => {
    fetchData(cedula);
  }, [cedula]);

  return (
    <section className={styles.viewTravelerSection}>
      <h2 className={styles.viewTravelerTitle}>Detalles del Viajero</h2>
      <div className={styles.viewTravelerCont}>
        <Link href="/travellers" passHref>
          <button className={styles.viewTravelerBack}>
            <FaArrowLeft className={styles.viewTravelerIcon} />
            Back
          </button>
        </Link>
      </div>
      <div className={styles.basicInfo}>
        <div className={styles.texts}>
          <span>Cedula :</span>
          {current.cedula}
        </div>
        <div className={styles.texts}>
          <span>Nombre :</span>
          {current.nombre}
        </div>
        <div className={styles.texts}>
          <span>Telefono :</span>
          {current.telefono}
        </div>
        <div className={styles.texts}>
          <span>Fecha de Nacimiento :</span>
          {moment(current.fecha_nacimiento).format("MMM DD, YYYY")}
        </div>
      </div>

      {current?.viaje?.length > 0 && current.viaje[0] !== null && (
        <>
          <h2 className={styles.viewTravelerTitle}> Viajes Asociados </h2>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr className={styles.tableRow}>
                <th> Cod. Viaje </th>
                <th> Origen </th>
                <th> Destio </th>
                <th> Precio </th>
              </tr>
            </thead>
            <tbody>
              {current.viaje.map((viaje, index) => {
                return (
                  <tr className={styles.tableRow} key={viaje.cod}>
                    <td className={styles.tableCell} data-col-title="Codigo">
                      {viaje.cod}
                    </td>
                    <td className={styles.tableCell} data-col-title="Origen">
                      {viaje.origen}
                    </td>
                    <td className={styles.tableCell} data-col-title="Destino">
                      {viaje.destino}
                    </td>
                    <td className={styles.tableCell} data-col-title="Precio">
                      {viaje.precio}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default ViewTraveler;
