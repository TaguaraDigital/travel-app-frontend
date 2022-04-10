import React from "react";
import styles from "./TravellersAdd.module.scss";
import { FaPlus } from "react-icons/fa";

const TravellersList = ({ travellers }) => {
  return (
    <section>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th className={styles.tableCell}> Cedula </th>
            <th className={styles.tableCell}> Nombre </th>
            <th className={styles.tableCell}> F. Nacimiento </th>
            <th className={styles.tableCell}> Telefono </th>
            <th className={styles.tableCell}> Add </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell} data-col-title="Cedula">
              <input className={styles.input} type="text" />
            </td>
            <td className={styles.tableCell} data-col-title="Nombre">
              <input className={styles.input} type="text" />
            </td>
            <td className={styles.tableCell} data-col-title="F.Nacimiento">
              <input className={styles.input} type="date" />
            </td>
            <td className={styles.tableCell} data-col-title="Telefono">
              <input className={styles.input} type="text" />
            </td>
            <td className={styles.tableCell}>
              <FaPlus />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default TravellersList;
