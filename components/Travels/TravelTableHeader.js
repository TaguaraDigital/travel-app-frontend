import styles from "../../pages/travels/Travel.module.scss";

const TravelTableHeader = () => {
  return (
    <thead className={styles.tableHead}>
      <tr className={styles.tableRow}>
        <th className={styles.tableCell}> Id </th>
        <th className={styles.tableCell}> Codigo </th>
        <th className={styles.tableCell}> Origen </th>
        <th className={styles.tableCell}> Destino </th>
        <th className={styles.tableCell}> Nro. Plazas </th>
        <th className={styles.tableCell}> Precios </th>
        <th className={styles.tableCell}> Accion </th>
      </tr>
    </thead>
  );
};

export default TravelTableHeader;
