import { useState } from "react";
import styles from "../../pages/travels/Travel.module.scss";
import { FaPlus, FaCheck, FaBan } from "react-icons/fa";

const TreavelRowUpdate = ({
  accion,
  travel,
  handleEditChange,
  handleEditSubmit,
  handleCancel,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell} data-col-title="Identificador">
        <input name="id" className={styles.input} value={travel.id} />
      </td>
      <td className={styles.tableCell} data-col-title="Codigo">
        <input
          className={styles.input}
          name="cod_viaje"
          value={travel.cod_viaje}
          placeholder=" Enter Codigo de Viaje"
          onChange={handleEditChange}
        />
      </td>
      <td className={styles.tableCell} data-col-title="Origen">
        <input
          className={styles.input}
          required
          name="origen"
          value={travel.origen}
          placeholder=" Enter Origen"
          onChange={handleEditChange}
        />
      </td>
      <td className={styles.tableCell} data-col-title="Destino">
        <input
          className={styles.input}
          required
          name="destino"
          value={travel.destino}
          placeholder=" Enter Destino"
          onChange={handleEditChange}
        />
      </td>

      <td className={styles.tableCell} data-col-title="Nro. Plazas">
        <input
          className={styles.input}
          required
          name="nro_plazas"
          value={travel.nro_plazas}
          placeholder=" Enter Nro. Plazas"
          onChange={handleEditChange}
        />
      </td>

      <td className={styles.tableCell} data-col-title="Precio">
        <input
          className={styles.input}
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
        <div className={styles.tableAccionButtons} data-col-title="Accion">
          <button
            type="submit"
            onClick={handleEditSubmit}
            className={styles.tableAccion__update}
          >
            {accion === "ADD" ? <FaPlus /> : <FaCheck />}
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
