import styles from "../../pages/travels/Travel.module.scss";
import { FaCheck, FaSquare } from "react-icons/fa";

const TreavelRowSelect = ({ travel, handleSelect }) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell} data-col-title="Id">
        {travel.id}
      </td>
      <td className={styles.tableCell} data-col-title="Codigo">
        {travel.cod_viaje}
      </td>
      <td className={styles.tableCell} data-col-title="Origen">
        {travel.origen}
      </td>
      <td className={styles.tableCell} data-col-title="Destino">
        {travel.destino}
      </td>

      <td className={styles.tableCell} data-col-title="Nro.Plazas">
        {travel.nro_plazas}
      </td>

      <td className={styles.tableCell} data-col-title="Precio">
        {travel.precio}
      </td>

      <td
        className={`${styles.tableCell} ${styles.tableAccion} `}
        data-col-title="Accion"
      >
        <div className={styles.tableAccionButtons} data-col-title="Accion">
          <button
            className={styles.tableAccion__update}
            type="button"
            onClick={(e) => handleSelect(e, travel)}
          >
            {travel.selected ? <FaCheck /> : <FaSquare />}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TreavelRowSelect;
