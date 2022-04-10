import { useState } from "react";
import styles from "../../pages/travels/Travel.module.scss";
import { FaCheck, FaBan } from "react-icons/fa";

const TreavelRowUpdate = ({
  travel,
  handleEditChange,
  handleEditSubmit,
  handleCancel,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell} data-col-title="Codigo">
        <input type="text" name="codigo" value={travel.codigo} disabled />
      </td>
      <td className={styles.tableCell} data-col-title="Origen">
        <input
          type="text"
          required
          name="origen"
          value={travel.origen}
          onChange={handleEditChange}
        />
      </td>
      <td className={styles.tableCell} data-col-title="Destino">
        <input
          type="text"
          required
          name="destino"
          value={travel.destino}
          placeholder=" Enter Destino"
          onChange={handleEditChange}
        />
      </td>

      <td className={styles.tableCell} data-col-title="Nro. Plazas">
        <input
          type="text"
          required
          name="nro_plazas"
          value={travel.nro_plazas}
          placeholder=" Enter Nro. Plazas"
          onChange={handleEditChange}
        />
      </td>

      <td className={styles.tableCell} data-col-title="Precio">
        <input
          type="text"
          required
          name="precio"
          value={travel.precio}
          placeholder=" Enter Precio"
          onChange={handleEditChange}
        />
      </td>

      <td
        className={`${styles.tableCell} ${styles.tableAccion}`}
        data-col-title="Accion"
      >
        <div className={styles.tableAccionButtons}>
          <button
            type="submit"
            onClick={handleEditSubmit}
            className={styles.tableAccion__update}
          >
            <FaCheck />
          </button>
          <button
            type="submit"
            onClick={handleCancel}
            className={styles.tableAccion__delete}
          >
            <FaBan />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TreavelRowUpdate;
