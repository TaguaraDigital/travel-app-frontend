import styles from "./TravellersList.module.scss";
import Link from "next/link";
import moment from "moment";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";

const TravellersList = ({ travellers }) => {
  return (
    <section className={styles.section}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th> Cedula </th>
            <th> Nombre </th>
            <th> F. Nacimiento </th>
            <th> Telefono </th>
            <th> Ver </th>
            <th> Editar </th>
            <th> Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {travellers?.map((traveler) => {
            return (
              <tr className={styles.tableRow} key={traveler.cedula}>
                <td className={styles.tableCell} data-col-title="Cedula">
                  {traveler.cedula}
                </td>
                <td className={styles.tableCell} data-col-title="Nombre">
                  {traveler.nombre}
                </td>
                <td className={styles.tableCell} data-col-title="F.Nacimiento">
                  {moment(traveler.fecha_nacimiento).format("MMM DD, YYYY")}
                </td>

                <td className={styles.tableCell} data-col-title="Telefono">
                  {traveler.telefono}
                </td>

                <td className={styles.tableCell} data-col-title="Ver">
                  <Link href={`/travellers/${traveler.cedula}`} passHref>
                    <button
                      className={`${styles.tableAccion} ${styles.tableAccion__view}`}
                    >
                      <FaEye id={`update-${traveler.cedula}`} />
                    </button>
                  </Link>
                </td>
                <td className={styles.tableCell} data-col-title="Editar">
                  <Link href="/updateuser" passHref>
                    <button
                      className={`${styles.tableAccion} ${styles.tableAccion__update}`}
                    >
                      <FaPencilAlt id={`update-${traveler.cedula}`} />
                    </button>
                  </Link>
                </td>
                <td className={styles.tableCell} data-col-title="Eliminar">
                  <button
                    className={`${styles.tableAccion} ${styles.tableAccion__delete}`}
                    id={`update-${traveler.id}`}
                    onClick={(e) =>
                      alert(
                        `Esta Seguro de Eliminar este traveler ${traveler.nombre}`
                      )
                    }
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
export default TravellersList;
