import styles from "../../pages/travels/Travel.module.scss";

const TravelTableHeader = () => {
  return (
    <thead className={styles.tableHead}>
      <tr className={styles.tableRow}>
        <th> Identificador </th>
        <th> Codigo </th>
        <th> Origen </th>
        <th> Destino </th>
        <th> Nro. Plazas </th>
        <th> Precios </th>
        <th> Accion </th>
      </tr>
    </thead>
  );
};

export default TravelTableHeader;
